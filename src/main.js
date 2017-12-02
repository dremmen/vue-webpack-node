import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import ElementUI from 'element-ui'
import home from '@/view/home'
import books from '@/view/books'
import  VueResource  from 'vue-resource'

Vue.config.productionTip = false

/* 头顶上进度条 */
const options = {
  color: '#99CCCC',
  failedColor: '#874b4b',
  thickness: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

/* element-ui */
Vue.use(ElementUI)

/* http请求，post、get的资源请求 */
Vue.use(VueResource) 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
