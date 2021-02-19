<template>
  <section class="background" @click="closeModal">
      <div class="content-wrapper">
          <span class="triangle"></span>
        <h2>Din beställning</h2>
        <ul>
          <li class="item" v-for="item in Object.values(currentOrder)" :key="item.id">
            <div class="item-info">
              <h3>{{item.title}}</h3>
              <p>{{item.price}} kr</p>
            </div>
            <div class="item-amount">
              <img @click="addToCart(item)" src="@/assets/arrow-up.svg" alt="Arrow up">
              <p>{{item.amount}}</p>
                <img src="@/assets/arrow-down.svg" alt="Arrow down">
            </div>  
          </li>
        </ul>
        <base-button @click.native="sendStatus" class="black-btn">Take my money</base-button>
      </div>
  </section>
</template>

<script>
import {mapState} from 'vuex'
import BaseButton from './BaseButton.vue'
export default {
  computed: {
    // currentOrder() {
    //   console.log('getting current order')
    //   return this.$store.getters.getCurrentOrder
    // },
    ...mapState(['currentOrder'])
  },
  components: { BaseButton },
    methods:{
      addToCart(prod) {
      this.$store.dispatch("addToCart", prod)
    },
      closeModal(e) {
        if (e.target.classList.value == 'background') {
            this.$store.dispatch('toggleCart')
        }
      },
    sendStatus(){
    this.$store.dispatch('toggleCart')

      this.$router.replace('/order-status')
    }
    },
   
}
</script>

<style scoped lang="scss">
    section{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 6;
        background-color: rgba(0, 0, 0, 0.637);
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

            h2 {
              margin: 2rem 0;
            }

            ul {
              list-style: none;
              width: 90%;
              .item {
                display: flex;
                justify-content: space-between;
                margin-bottom: 2rem;
                width: 100%;

                .item-amount {
                  display: flex;
                  flex-direction: column;
                  font-weight: 700;
                  align-items: center;
                  justify-content: space-around;
                }
              }
            }
        }
        .black-btn{
            background-color: black;
            color: white;
        }
    }
</style>