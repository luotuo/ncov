// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ECharts from 'vue-echarts'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

Vue.config.productionTip = false

// set ElementUI lang to zh-CN
Vue.use(ElementUI, { locale })
Vue.component('v-chart', ECharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// var _hmt = _hmt || []
// window._hmt = _hmt; // 修改为window 全局变量
// (function () {
//   var hm = document.createElement("script")
//   hm.src = "https://hm.baidu.com/hm.js?48850c956411827c2d82ee386b6d1185"
//   var s = document.getElementsByTagName("script")[0]
//   s.parentNode.insertBefore(hm, s)
// })()

// router.beforeEach((to, from, next) => {
//   if (window._hmt) {
//     if (to.path) {
//       window._hmt.push(['_trackPageview', '/#' + to.fullPath])
//     }
//   }
//   next()
// })
