<template>
  <div id="app">
    <header></header>
    <router-view/>
  </div>
</template>

<script>
import * as API from "./api/mock.js"
export default {
 async mounted() {
    const test = await API.fetchProducts()
    console.log(test);
  }
}
</script>

<style lang="scss">




</style>
