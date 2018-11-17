import Vuex from 'vuex'
import axios from 'axios'
const createStore = () => {
  return new Vuex.Store({
    actions: {
      nuxtServerInit ({commit}, {req}){
        if(req.session && req.session.authUser)
          commit('SET_USER', req.session.authUser)
      },
      // for login
      async login({commit}, {req}) {
        try {
          const {data} = await axios.post('/api/login', {username, passwd})
          commit('SET_USER', data)
        }
        catch(error) {
          // 判斷login 是否成功
          if (error.response && error.response.status === 401){
            throw new Error('Bad credentials')
          }
          throw error;
        }
      },
      // for logout
      async logout({commit}) {
        // await axios.post('/logout')
        commit('SET_USER', null)
      }
    },
    state: {
      accumulator: 0,
      authUser: null
    },
    mutations: {
      incre (state) {
        state.accumulator++
      },
      SET_USER: (state, user) =>{
        state.authUser = user
      }
    },
    modules: {
      user: {
        state: {
          currentPage:'/'
        },
        mutations: {
          nav(state, {path, target}) {
            // console.log(JSON.stringify(state))
            console.log(state)
            console.log(path)
            console.log(target)
            state.currentPage = path
          }

        }
      }
    }
  })
}

export default createStore
