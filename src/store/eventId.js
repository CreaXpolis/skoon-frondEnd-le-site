
import axios from "axios";

const evenementId= {
    namespaced: true,
    state () { 
     return {
      evenementId: [],
     }
    },
    mutations: {
      SET_EVENEMENTID(state, evenementId){
        state.evenementId = evenementId
      },
    },
    getters: {
      evenementId (state) {
        return state.evenementId;
      }
    },
    actions: {
      fetchEventId({commit}) {
          axios
            .get("http://localhost:8080/evenement/55")
            .then(res => {
                commit('SET_EVENEMENTID', res.data)
            })
            .catch((err) => {
                console.error('erreur de chargement', err);
            
            });
        }
    },
  }
  export default evenementId