import Vue from 'vue'
import App from './App.vue'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { MdCard,MdButton, MdField } from 'vue-material/dist/components'

Vue.use(MdCard)
Vue.use(MdButton)
Vue.use(MdField)


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
