import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../api/mock.js'
import * as Mutations from './mutationTypes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    user: null,
    isLoggedIn: false,
    currentOrder: 
      {"Bryggkaffe":{"id":1,"title":"Bryggkaffe","desc":"Bryggd på månadens bönor.","price":39,"amount":1},"Caffè Doppio":{"id":2,"title":"Caffè Doppio","desc":"Bryggd på månadens bönor.","price":49,"amount":1},"Cappuccino":{"id":3,"title":"Cappuccino","desc":"Bryggd på månadens bönor.","price":49,"amount":1}},
    orderDetails: null
    
      
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
    [Mutations.ADD_TO_CART](state, payload) {
      if (state.currentOrder[payload.title]) {
        state.currentOrder[payload.title].amount++;
      } else {
        payload.amount = 1;
        state.currentOrder[payload.title] = payload
      }
      
    },
    [Mutations.SET_ORDER_DETAILS](state, payload) {
      state.orderDetails = payload
    }
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
    
    if (user) {
      commit(Mutations.SET_USER, user)
      commit(Mutations.SET_LOGGED_IN)
    }
      
  },
  addToCart({commit}, payload) {
    commit(Mutations.ADD_TO_CART, payload)
  },
  async makeOrder({commit, state}) {
    let userId = null
    if (state.isLoggedIn) {
      userId = state.user.id
    }
    const orderDetails = await API.makeOrder(userId, state.currentOrder)
    commit(Mutations.SET_ORDER_DETAILS, orderDetails)
  }
    
  },
  getters:{
    getProducts: (state) => state.products
  }
})
