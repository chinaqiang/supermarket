<!-- 轮播图模版-->>

<template>
  <div id="hy-swiper">
  <!--<div class="swiper" @touchstart="touchStart" @touchmov="touchMove" @touchend="touchEnd">-->
    <div class="swiper">
      <slot></slot>
    </div>
    <slot name='indicator'></slot>
    <div class="indicator">

      <slot name='indicator' v-if="showIndicator && slideCount>1">
        <div v-for="{item, index} in slideCount" class="indi-item" :class="{active: index === currentIndex -1}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    // 定时器默认1m
    interval: {
      type: Number,
      default: 1000
    },
    // 动画延迟
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      slideCount: 0,  // 元素个数
      totalWidth: 0,  // swiper 宽度
      swiperStyle: {},  // swiper 样式
      currentIndex: 1,  // 当前index
      scrolling: false // 是否正在滚动
    }
  },
  mounted: function() {
    // 1. 操作DOM, 在前后添加Slide
    setTimeout(() => {
      this.handleDom();

      // 2. 开启定时器
      this.startTimer();
    }, 200)
  },
  methods: {
    // 定时器操作
    startTimer: function() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth)
      } ,this.interval)
    },
    stopTimer: function() {
      window.clearInterval(this.playTimer)
    },

    // 滚到正确的位置
    scrollContent: function(currentPosition) {
      // 设置正在滚动
      this.scrolling = true;

      // 开始滚动动画
      this.swiperStyle.transition = 'transfrom' + this.animDuration + 'ms';
      this.setTransform(currentPosition);
      // 判断滚动到的位置
      this.checkPosition();

      // 滚动完成
      this.scrolling = false
    },
    /*
      校正正确位置
    */
    checkPosition: function() {
      window.setTimeout(() => {
        // 正确位置
        this.swiperStyle.transition = '0ms';
        if(this.currentIndex >= this.slideCount + 1) {
          this.currentIndex =1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }

        // 结束移动后的回调
        this.$emit('transitionEnd', this.currentIndex-1);  //此处给父元素发送了值 ， 但nei使用
      }, this.animDuration)
    },
  /*
    操作DOM 在DOM前后添加 slide
  */
    handleDom: function ()  {
    // 获取操作元素
      let swiperEl = document.querySelector('.swiper');
      let slidesEls = swiperEl.getElementsByClassName('slide');

      // 保存个数
      this.slideCount = slidesEls.length;
      //如果大于一个， 那么在前后分解添加一个 slide
      if(this.slideCount >1) {
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount -1].cloneNode(true);
        swiperEl.insertBefore(cloneLast, slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle - swiperEl.style;
       //让swiper 元素 显示第一个（目前显示前面添加的最后一个元素）
        this.setTransform(-this.totalWidth)
      }
    },

    /*
      拖动事件
    */
    touchStart: function(e) {
      //1 不可以拖动
      if(this.scrolling) return;
      //2 停止定时器
      this.stopTimer();
      //3 保存开始滚动位置
      this.startX = e.touches[0].pageX;
    },
    touchMove: function(e) {
      // 计算用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;

      // 设置当前位置
      this.setTransform(moveDistance);
    },
    touchEnd: function(e) {
      // 1 获取移动距离
      let currentMove = Math.abs(this.distance)

      //2 判断最终距离
      if(this.distance === 0) {
        return
      } else if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio) {
        // 右边移动超过 0.5
        this.currentIndex--
      } else if(this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
        // 向左移动 0.5
        this.currentIndex++
      }
      //3 移动到正确位置
      this.scrollContent(-this.currentIndex * this.totalWidth);

      // 4 移动完成后重新开启定时器
      this.startTimer();
    },
      /*
        控制上一个， 下一个
      */
    previous: function() {
      this.changeItem(-1);
    },
    next: function() {
      this.changeItem(1);
    },
    changeItem: function (num) {
      // 1 移除定时器
      this.stopTimer();

      // 2 修改index和位置
      this.currentIndex +=num;
      this.scrollContent(-this.currentIndex * this.totalWidth);

      // 3 添加定时器
      this.startTimer();
    }
  }
}
</script>

<style>
  #hy-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color:  rgba(212,62,46,1.0);
  }
</style>