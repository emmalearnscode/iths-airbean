<template>
  <section>
      <div class="content-wrapper">
          <span class="triangle"></span>
        <h1>Din beställning e här</h1>
        <base-button @click.native="sendStatus" class="black-btn">Take my money</base-button>
      </div>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
  computed: {

  },
  components: { BaseButton },
    methods:{
    sendStatus(){
    this.$store.dispatch('toggleCart')

      this.$router.replace('/order-status')
    }
    }
}
</script>

<style scoped lang="scss">
    section{
        position: absolute;
        top: 0;
        z-index: 6;
        background-color: rgba(0, 0, 0, 0.637);
        height: 100vh;
        width: 100vw;
        padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        .content-wrapper{
            position: relative;
            background-color: white;
            height: 86vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1.2rem;
            
            .triangle{
                height: 20px;
                width: 20px;
                position: absolute;
                z-index: 2;
                background-color: white;
                top: -10px;
                right: 30px;
                transform: rotate(45deg);
            }
        }
        .black-btn{
            background-color: black;
            color: white;
        }
    }
</style>