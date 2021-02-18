<template>
  <div class="menu-wrapper">
    <h1>Menu</h1>
    <ul>
      <li v-for="product in getProducts" :key="product.id">
        <button @click="addToCart(product)"><img src="@/assets/add.svg" alt="plus sign"></button>
        <div @click="showExtraInfo(product)" class="prod-name">
        <h3>{{product.title}}</h3>
        <p>{{product.desc}}</p>
        </div>
        <h3 class="price">{{product.price}} kr</h3>
        
        
        
      </li>
    </ul>
    <transition name="fade">  
    <product-info-modal @closeTheModal="closeModal" v-if="infoModalIsOpen" :currentProd="clickedOnProduct"></product-info-modal>
    </transition>  
  </div>
</template>

<script>

import ProductInfoModal from '../components/ProductInfoModal.vue'
export default {
  name: 'Menu',
  components: {ProductInfoModal},
  data() {
    return {
      infoModalIsOpen: false,
      clickedOnProduct: null
    }
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts
    }
  },
  methods: {
    addToCart(prod) {
      this.$store.dispatch("addToCart", prod)
    },
    showExtraInfo(prod) {
    this.infoModalIsOpen = true;
    this.clickedOnProduct = prod
  },
  closeModal() {
    this.infoModalIsOpen = false;
  }

  },
  
}
</script>

<style lang="scss" scoped>
$brown: #2F2926;
.menu-wrapper {
 
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  button {
    width: 2.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: $brown;
    align-self: center;
    cursor: pointer;
  }

  ul {
    width: 90%;
    margin: 0 auto;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5rem;


    p {
      margin-top: 0.3rem;
    }

    .prod-name {
      cursor: pointer;
    }
  }
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}
</style>
