import Vue from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core"
<<<<<<< HEAD
import { faPaw, faCheckCircle, faTimesCircle, faBars} from "@fortawesome/free-solid-svg-icons"
=======
import { faPaw, faCheckCircle, faTimesCircle, faHeart} from "@fortawesome/free-solid-svg-icons"
>>>>>>> develop
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

Vue.config.productionTip = false
library.add(faPaw, faCheckCircle, faTimesCircle, faHeart)

export const eventBus = new Vue();

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
