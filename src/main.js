import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/base.css'
// import './assets/js/phone'
import './plugins/vant'
import 'default-passive-events'
//挂载原型上
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

//使用开发插件
import echarts from './plugins/echarts'
Vue.use(echarts)
//  引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
