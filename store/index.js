import Vuex from 'vuex'
const createStore = () => {
  return new Vuex.Store({
    actions: {
      nuxtServerInit ({commit}, {req}){
        // if(req.session.user){
        //   commit('user')
        // }
        // check user login or not
      }
    },
    state: {
      accumulator: 0
    },
    mutations: {
      incre (state) {
        state.accumulator++
      }
    },
    modules: {
      user: {
        state: {
          currentPage:'/'
        },
        mutations: {
          nav(state, {path}) {
            console.log(path)
            state.currentPage = path
          }
        }
      }
    }
  })
}

export default createStore
