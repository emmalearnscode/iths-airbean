<template>
  <section class="status">
    <section class="inner-wrapper">
    <p>Ordernummer <strong>s</strong></p>
    <img src="../assets/drone.svg" alt="drone carrying coffee mug">
    <h2>Din beställning är på väg</h2>
    <p class="large"><strong></strong> minuter</p>
    <base-button @click.native="sendHome">Ok, cool!</base-button>
    <!-- <button ></button> -->
    </section>
  </section>

</template>

<script>
import BaseButton from '../components/BaseButton.vue'
export default {
  components: { BaseButton },
  computed: {
    orderDetails() {
      return this.$store.getters.getOrderDetails
    }
  },
  methods:{
    sendHome(){
      this.$router.replace('/menu')
    }
  }
}
</script>

<style scoped lang="scss">
  .status{
    color: white;
    background-color: #E5674E;
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;

    .inner-wrapper {
      height: 80%; 
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center; 

      h2 {
        text-align: center;
      }
    }

    .large {
      font-size: 2.1rem;
    }
  }
</style>