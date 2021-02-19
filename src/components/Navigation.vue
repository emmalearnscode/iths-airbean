<template>
<div class="wrapper">
   <div @click="toggleNav" class="nav-button">
          <img :src="require(`@/assets/${navIconSource}`)" alt="icon">
        </div>
        <NavigationMenu v-show="getNavBarIsActive" />
</div>
    
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import NavigationMenu from './NavigationMenu'

export default {
components: {
  NavigationMenu
}, 
computed: {
      ...mapGetters(['getNavBarIsActive']),
            navIconSource(){
      if (this.getNavBarIsActive == true) {
        return 'close.svg'
      }
      else{
        return 'navicon.svg'
      }
      
    },
},
methods: {
    ...mapActions(['toggleNavBar']),
      toggleNav(){
      this.toggleNavBar()
    },
}
}
</script>

<style lang="scss" scoped>
.wrapper {
  .nav-button {
    background-color: #fff;
    border-radius: 50%;
    z-index: 10;
    width: 4.8rem;
    height: 4.8rem;
    display: grid;
    place-items: center;
    position: relative;

    img {
      max-width: 3rem;
    }
  }
}
</style>