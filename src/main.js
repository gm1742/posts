import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import style from './assets/style.css'

Vue.config.productionTip = false

new Vue({
  style,
  router,
  store,
  render: h => h(App),
  created () {
    this.$store.dispatch('postsList')
  }
}).$mount('#app')
