import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import './config/axios'
import './config/mq'
import store from './config/store'
import router from './config/router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faChevronDown, faChevronLeft, faUserSecret, faGear, faArrowRightFromBracket, faHouse, faFolder, faFile, faUser, faPencil, faTrash, faFolderOpen, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUserSecret, faChevronDown, faChevronLeft, faGear, faArrowRightFromBracket, faHouse, faFolder, faFile, faUser, faPencil, faTrash, faFolderOpen, faMagnifyingGlass)


/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')