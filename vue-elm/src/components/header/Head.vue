<template>
  <header>
    <span class="left">elm</span>
    <span class="right">登录|注册</span>
  </header>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 1.95rem;
}

.left {
  left: 0.4rem;
  font-weight: 400;
  font-size: 0.7rem;
  color: #fff;
  width: 2.3rem;
  height: 0.7rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.right {
  right: 0.55rem;
  font-size: 0.65rem;
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
