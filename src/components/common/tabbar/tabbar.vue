<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<style>
  #tabbar {
    position: fixed;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 59px;
    display: flex;

    background: #f6f6f6;
    box-shadow: 0 -2px 1px rgba(0,0,0,.1);

  }

</style>