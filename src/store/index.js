import { createStore } from 'vuex'

export default createStore({
  state () {

   return {
      Evenements : [{}],
   }
  },
  mutations: {
    setEvenements(state, valeur){
      state.Evenements = valeur; 
    },
  },
  getters: {
    Evenements (state) {
      return state.Evenements;
    }
  },
  actions: {

  },
  modules: {
  }
})

