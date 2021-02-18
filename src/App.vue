<template>
  <div :style="{backgroundColor: currentBackground, color: currentColor}" class="app-wrapper">
    <header>
      <img class="header-flower" src="./assets/graphics-header.svg" alt="">
    </header>

    <the-header v-if="showHeader">
      <template v-slot:header>
        <div @click="toggleNav" class="nav-icon-wrapper-left cursor-pointer">
          <!-- "require(…/assets/products/${navIconSource})" -->
          <img :src="require(`./assets/${navIconSource}`)" alt="icon">
        </div>
        <div @click="toggleCart" v-if="showBagIcon" class="nav-icon-wrapper-right cursor-pointer">
          <img src="./assets/bag.svg" alt="">
          <span>0</span>
        </div>
      </template>
    </the-header>

    <navigation-menu v-if="getNavBarIsActive" />
    <cart-modal v-if="getCartIsActive" />

    <router-view class="router-wrapper"></router-view>

    <footer>
      <img class="footer-flower" src="./assets/graphics-footer.svg" alt="">
    </footer>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import CartModal from '@/components/CartModal.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'
import TheHeader from '@/components/TheHeader.vue'
import Landing from '@/components/Landning.vue'

export default {
    components:{
    NavigationMenu,
    TheHeader,
    CartModal,
    Landing
  },
   computed:{
     currentBackground(){
       if(this.$route.path == "/my-profile"){
         return '#2F2926'
       }else{
         return '#F3E4E1'
       }
     },
     currentColor(){
       if(this.$route.path != "/my-profile"){
         return '#2F2926'
       }else{
         return 'white'
       }
     },

    navIconSource(){
      if (this.getNavBarIsActive == true) {
        return 'close.svg'
      }
      else{
        return 'navicon.svg'
      }
      
    },
    showHeader(){
        if (this.$route.path == "/order-status") {
          return false
        }else{
          return true
        }
    },
    pathIsOurCoffee(){
      if (this.$route.path == "/our-coffee") {
        return true
      } else {
        return false
      }
    },
    showBagIcon(){
      if (!this.pathIsOurCoffee && !this.getNavBarIsActive) {
        return true
      } else {
        return false
      }
    },
        
        
    ...mapGetters(['getNavBarIsActive', 'getCartIsActive'])
  },

  async created() {
    await this.fetchProducts()
    this.checkUserExists()
  },
  methods: {
    toggleNav(){
      this.toggleNavBar()
    },
    toggleCart(){
      this.toggleCart()
    },
    ...mapActions(['fetchProducts', 'checkUserExists', 'toggleNavBar', 'toggleCart']),
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Rufina:wght@700&family=Work+Sans:wght@400;600;700&display=swap');
$pink: #F3E4E1;
$brown: #2F2926;
$dark-green: #0E927D;
$orange: #E5674E;

:root {
  font-size: 62.5%;
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  .app-wrapper{
    position: relative;
    width: 100%;
    max-width: 600px;
    min-height: 100vh;
    
    background-color: $pink;
    header{
      .header-flower{
        width: 100%;
      }
    }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'PT Serif', serif;
    font-weight: 700;
    
  }

  h1 {
    font-size: 4.2rem;
  }

  h2 {
    font-size: 3.2rem;
  }

  h3 {
    font-size: 2.3rem;
  }

  p {
    font-family: 'Work Sans', sans-serif;
    font-size: 1.2rem;
  }

  .router-wrapper {
    padding: 1rem;
  }

    .nav-icon-wrapper-left{
      background-color: white;
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 6;
      img{
        height: 1.6rem;
        width: 1.5rem;
      }
    }
    .nav-icon-wrapper-right {
      position: relative;
      background-color: black;
      padding: 1.2rem 1.5rem;
      border-radius: 50%;
      z-index: 1001;
      span{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        height: 1.4rem;
        width: 1.4rem;
        border-radius: 50%;
        text-align: center;
        background-color: $orange;
        color: white;
      }
    }
    .cursor-pointer{
      cursor: pointer;
    }
    footer{
      
      width: 100%;
      bottom: 0;
      position: absolute;
      
      .footer-flower{
        width: 100%;
      }

    }

  }
</style>
