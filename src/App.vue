<template>
  <div id="app">
    <header></header>
    <router-view/>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
export default {
 async created() {
    this.fetchProducts()
    // this.registerUser({name: 'pelle', email: 'pelle@iths.se'})
    this.checkUserExists()
    this.makeOrder()
  },
  methods:{

    ...mapActions(['fetchProducts', 'checkUserExists', 'makeOrder'])
  }
}
</script>

<style lang="scss">




</style>
