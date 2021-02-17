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
  },
  methods:{

    ...mapActions(['fetchProducts', 'registerUser', 'checkUserExists'])
  }
}
</script>

<style lang="scss">




</style>
