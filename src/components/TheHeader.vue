<template>
  <header>
     <div @click="toggleNav" class="nav-button">
          <img :src="require(`@/assets/${navIconSource}`)" alt="icon">
        </div>
        <div @click="toggleCart" v-if="showBagIcon">
          <img src="@/assets/bag.svg" alt="">
          <span>0</span>
        </div>
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    computed: {
         navIconSource(){
      if (this.getNavBarIsActive == true) {
        return 'close.svg'
      }
      else{
        return 'navicon.svg'
      }
      
    },
     showBagIcon(){
      if (!this.pathIsOurCoffee && !this.getNavBarIsActive) {
        return true
      } else {
        return false
      }
    },
    },
 methods: {
    toggleNav(){
      this.toggleNavBar()
    },
    toggleCart(){
      this.toggleCart()
    },
    ...mapActions(['toggleNavBar', 'toggleCart']),
  },
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