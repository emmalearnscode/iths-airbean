<template>
<div class="cart-wrapper">
     <div class="cart" @click="toggleCart" v-if="showBagIcon">
          <img src="@/assets/bag.svg" alt="">
          <span>{{getItemAmount}}</span>
        </div>
          <CartModal v-if="getCartIsActive" />
</div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CartModal from '@/components/CartModal.vue'

export default {
  components: {
    CartModal
  },
  computed: {
     showBagIcon(){
      if (!this.pathIsOurCoffee && !this.getNavBarIsActive) {
        return true
      } else {
        return false
      }
    },
      ...mapGetters(['getCartIsActive', 'getItemAmount'])
  },
  methods: {
        toggleCart(){
      this.toggleCart()
    },
    ...mapActions(['toggleCart']),
  },
}
</script>

<style lang="scss" scoped>
$pink: #F3E4E1;
$brown: #2F2926;
$dark-green: #0E927D;
$orange: #E5674E;

.cart-wrapper {
  .cart {
    background-color: $brown;
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    display: grid;
    place-items: center;
    position: relative;

    span {
      background-color: $orange;
      border-radius: 50%;
      color: #fff;
      display: grid;
      place-items: center;
      font-size: 1.2rem;
      position: absolute;
      top: 0;
      right: 0;
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>