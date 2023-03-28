<template>
  <header>
    <span class="left">elm</span>
    <span class="right">登录|注册</span>
    <div class="city_tip">
      <span class="city_left">当前定位城市：</span>
      <span class="city_right">定位不准时，请在城市列表中选择</span>
    </div>
    <a href="#/city/15">
      <span class="country">西安</span>
    </a>
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

.city_tip {
  display: flex;
  justify-content: space-between;
  line-height: 1.45rem;
  padding: 0 0.45rem;
  margin-top: 2.5rem;
}

.city_left {
  font-size: 0.55rem;
  color: #666;
}

.city_right {
  font-weight: 900;
  font-size: 0.475rem;
  color: #9f9f9f;
}

.country {
  color: #3190e8;
}

a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.8rem;
  padding: 0 0.45rem;
  border-top: 1px solid #e4e4e4;
  border-bottom: 2px solid #e4e4e4;
  font: 0.75rem/1.8rem Microsoft YaHei;
}
</style>
