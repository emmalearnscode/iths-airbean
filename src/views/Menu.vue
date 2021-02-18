<template>
  <div class="home">
    <h1>Menu</h1>
    <ul>
      <li v-for="product in getProducts" :key="product.id">
        <button @click="addToCart(product)">Add</button>
        <h3>{{product.title}}</h3>
        <h3>{{product.price}}</h3>
        <p>{{product.desc}}</p>
        
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    getProducts() {
      return this.$store.getters.getProducts
    }
  },
  methods: {
    addToCart(prod) {
      this.$store.dispatch("addToCart", prod)
    }
  }
}
</script>
