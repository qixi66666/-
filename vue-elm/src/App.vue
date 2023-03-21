<template>
  <div id="app">
    <nav>
      <router-link to="/" class="head_left">elm.me</router-link>
      <router-link to="/about" class="head_right">登录|注册</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: white;
}

nav {
  padding: 10px;
  background-color: skyblue;
}

.head_left {
  margin-left: 10px;
}

.head_right {
  margin-left: 80%;
}
</style>
