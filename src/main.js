import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('schoolYear', value => {

  value = String(value)
  if (value)
    return (`${value}º ano`)

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
