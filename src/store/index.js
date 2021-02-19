import Vue from 'vue'
import Vuex from 'vuex'
import * as API from '../api/mock.js'
import * as Mutations from './mutationTypes.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderHistory: [],
    products: [],
    user: null,
    isLoggedIn: false,
    itemAmount: 0,
    currentOrder: {},
    orderDetails: null,
    navBarIsActive: false,
    cartIsActive: false,
    timeLeft: 0
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, payload) {
      state.products = payload
    },
    [Mutations.SET_USER](state, payload) {
      state.user = payload
    },
    [Mutations.SET_LOGGED_IN](state) {
      state.isLoggedIn = true
    },
    [Mutations.ADD_TO_CART](state, payload) {
      state.itemAmount++
      if (state.currentOrder[payload.title]) {
        state.currentOrder[payload.title].amount++;

      } else {
        payload.amount = 1;
        state.currentOrder[payload.title] = payload
      }
    },
    [Mutations.SET_ORDER_DETAILS](state, payload) {
      state.orderDetails = payload
    },
    [Mutations.SET_ORDER_HISTORY](state, payload) {
      state.orderHistory = payload
    },

    [Mutations.TOGGLE_NAVBAR](state) {
      state.navBarIsActive = !state.navBarIsActive
    },

    [Mutations.TOGGLE_CART](state) {
      state.cartIsActive = !state.cartIsActive
    },
    [Mutations.SET_TIME_LEFT](state, payload) {
      state.timeLeft = payload

    }
  },
  actions: {
    async fetchProducts({ commit }) {
      const products = await API.fetchProducts()
      commit(Mutations.SET_PRODUCTS, products)
    },
    async fetchOrderHistory({ commit }) {
      const orderHistory = await API.fetchOrderHistory()

      commit(Mutations.SET_ORDER_HISTORY, orderHistory)
    },
    async registerUser({ commit }, payload) {
      const user = await API.registerUser(payload.name, payload.email)
      commit(Mutations.SET_USER, user)
      commit(Mutations.SET_LOGGED_IN)
    },
    checkUserExists({ commit }) {
      const user = API.userExists()

      if (user) {
        commit(Mutations.SET_USER, user)
        commit(Mutations.SET_LOGGED_IN)
      }

    },
    addToCart({ commit }, payload) {
      commit(Mutations.ADD_TO_CART, payload)
    },
    async makeOrder({ commit, dispatch, state }) {
      let userId = state.user.id

      const orderDetails = await API.makeOrder(userId, state.currentOrder)
      dispatch("startTimer", orderDetails.estimatedTime)
      commit(Mutations.SET_ORDER_DETAILS, orderDetails)
    },
    startTimer({ commit }, payload) {
      commit(Mutations.SET_TIME_LEFT, payload)
      const interval = setInterval(() => {
        if (payload > 0) {
          payload--
          commit(Mutations.SET_TIME_LEFT, payload)

        } else {
          clearInterval(interval)
        }
      }, 6000);


    },

    toggleNavBar({ commit }) {
      commit(Mutations.TOGGLE_NAVBAR)
    },
    toggleCart({ commit }) {
      commit(Mutations.TOGGLE_CART)
    },

  },
  getters: {
    getProducts: (state) => state.products,
    getNavBarIsActive: state => state.navBarIsActive,
    getCartIsActive: state => state.cartIsActive,
    getOrderHistory: state => state.orderHistory,
    getUser: state => state.user,
    getIsLoggedIn: state => state.isLoggedIn,
    getCurrentOrder: state => state.currentOrder,
    // getOrderAmount: state => {
    //   console.log(state.currentOrder)
    //   let amount = 0;
    //   // Object.values(state.currentOrder).forEach(item => {
    //   //   console.log(item)
    //   //   amount += item.amount
    //   // })

    //   // console.log(amount)
    //   return amount
    // },
    getItemAmount: state => state.itemAmount,
    getOrderDetails: state => state.orderDetails,
    getTimeLeft: state => state.timeLeft
  }
})





