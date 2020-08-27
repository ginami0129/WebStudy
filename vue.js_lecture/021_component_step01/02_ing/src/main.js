import Vue from 'vue'
import App from "./step06/App"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data:{
    value01:"test1"
  }
}).$mount('#app')
