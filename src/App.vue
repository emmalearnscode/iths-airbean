<template>
  <div :style="{backgroundColor: currentBackground, color: currentColor}" class="app-wrapper">
    <the-header v-if="showHeader" />

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

export default {
    components:{
    NavigationMenu,
    TheHeader,
    CartModal
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
                
    ...mapGetters(['getNavBarIsActive', 'getCartIsActive'])
  },

  async created() {
    await this.fetchProducts()
    this.checkUserExists()
  },
  methods: {
    // toggleNav(){
    //   this.toggleNavBar()
    // },
    // toggleCart(){
    //   this.toggleCart()
    // },
    ...mapActions(['fetchProducts', 'checkUserExists']),
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

      .header-flower{
        width: 100%;
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
