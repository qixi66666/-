// 导入 vue 包，得到vue 的构造函数
import Vue from 'vue'
// 导入app.vue 根组件，将来要把 app.vue 中的模板结构，渲染到 HTML 页面中
import App from './App.vue'

Vue.config.productionTip = false

// 创建 vue 的实例对象
new Vue({
  // 把 rander 函数指定的组件，渲染到HTML 页面中
  render: h => h(App),
}).$mount('#app')

// Vue 实例的 $mount() 方法和 el 的作用完全一样
