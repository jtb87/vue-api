import Vue from 'vue'
import App from './App.vue'

import 'vue-material/dist/vue-material.min.css'
import { MdCard,MdButton, MdField, MdIcon} from 'vue-material/dist/components'
import 'vue-material/dist/theme/black-green-light.css' // This line here

Vue.use(MdCard)
Vue.use(MdButton)
Vue.use(MdField)
Vue.use(MdIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
