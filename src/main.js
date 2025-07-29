import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router";//引入router

Vue.config.productionTip = false
// 全局引用 ElementUI
Vue.use(ElementUI);

new Vue({
  router,//5. 在当前实例挂载路由
  render: h => h(App),
}).$mount('#app')
