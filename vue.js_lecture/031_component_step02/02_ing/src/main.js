import Vue from 'vue'
import App from "./006_refs/App"
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
