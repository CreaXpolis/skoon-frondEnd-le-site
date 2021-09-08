
import axios from "axios";

const evenements= {
    namespaced: true,
    state () { 
     return {
      evenements: [],
     }
    },
    mutations: {
      SET_EVENEMENTS(state, evenements){
        state.evenements = evenements
      },
    },
    getters: {
      evenements (state) {
        return state.evenements;
      }
    },
    actions: {
      fetchAllEvents({commit}) {
          axios
            .get("http://localhost:8080/evenement")
            .then(res => {
                commit('SET_EVENEMENTS', res.data)
            })
            .catch((err) => {
                console.error('erreur de chargement', err);
            
            });
        }
    },
  }
  export default evenements