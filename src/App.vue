<template>
  <div id="app">
    <header></header>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  async created() {
    await this.fetchProducts()
    await this.checkUserExists()
  },
  methods: {
    ...mapActions(['fetchProducts', 'checkUserExists']),
  },
}
</script>

<style lang="scss"></style>
