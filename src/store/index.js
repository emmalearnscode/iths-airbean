import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../api/mock.js'
import * as Mutations from './mutationTypes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    user: null,
    isLoggedIn: false
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state,payload){
      state.products = payload
    },
    [Mutations.SET_USER](state,payload){
      state.user = payload
      console.log(state.user);
    },
    [Mutations.SET_LOGGED_IN](state){
      state.isLoggedIn = true
      console.log(state.isLoggedIn);
    },
  },
  actions: {
  async fetchProducts({commit}){
    const products = await API.fetchProducts()
    commit(Mutations.SET_PRODUCTS, products)
  },
  async registerUser({commit}, payload){
    const user = await API.registerUser(payload.name, payload.email)
    commit(Mutations.SET_USER, user)
    commit(Mutations.SET_LOGGED_IN)
  },
  checkUserExists({commit}){
    const user = API.userExists()
    console.log(user)
    if (user) {
      commit(Mutations.SET_USER, user)
      commit(Mutations.SET_LOGGED_IN)
    }
      
  }
    
  },
  getters:{
    getProducts: (state) => state.products
  }
})
