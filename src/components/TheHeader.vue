<template>
  <header>
    <Navigation />
        <Cart />

  </header>
</template>

<script>
import Cart from './Cart'
import Navigation from './Navigation'

export default {
  components: {
    Cart, Navigation
  }
}
</script>

<style scoped lang="scss">
    header{
        align-items: center;
        background-image: url("../assets/graphics-header.svg");
        background-repeat: no-repeat;
        height: 12rem;
       background-size: cover;
       display: flex;
       justify-content: space-between;
       padding: 0 2rem;
    }
</style>