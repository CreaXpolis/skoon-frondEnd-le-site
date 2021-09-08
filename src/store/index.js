
 import { createStore } from 'vuex'
 import evenements from "../store/evenements.js"
 import evenementId from "../store/eventId.js"
  
 export default createStore ({


modules: {
    evenements, evenementId,
}



})