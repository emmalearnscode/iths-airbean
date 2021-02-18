<template>
  <div class="profile-wrapper">
    <article class="user-info">
      <img src="@/assets/profile.svg" alt="Profile icon" />
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </article>
    <article class="user-order-history">
      <h3>Orderhistorik</h3>
      <ul>
        <div class="order" v-for="order in orderHistory" :key="order.id">
          <div class="row">
            <p class="weight">#{{ order.orderId }}</p>
            <p>{{ order.date }}</p>
          </div>
          <div class="row">
            <p>total ordersumma</p>
            <p>{{ order.totalPrice }} kr</p>
          </div>
          <div class="row">
            <p class="weight" >Total spenderat</p>
            <p class="weight" >{{ totalSpent }} kr</p>
          </div>
        </div>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
    orderHistory() {
      return [
        {
          orderId: "34uy2t34",
          date: "20/03/06",
          totalPrice: 345,
          estimatedTime: 13,
        },
        {
          orderId: "4uyt5u44",
          date: "20/04/06",
          totalPrice: 435,
          estimatedTime: 15,
        },
        {
          orderId: "989f8e98te",
          date: "20/03/06",
          totalPrice: 1485,
          estimatedTime: 15,
        },
      ];
      // return this.$store.getters.getOrderHistory;
    },
    totalSpent() {
      let total = 0
      this.orderHistory.forEach(elemenet => total += elemenet.totalPrice)
      return total
    }
  },
};
</script>

<style lang="scss" scoped>
.profile-wrapper {

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 20%;
    }
  }
  .user-order-history {
    margin-top: 10rem;
    .order {
      .row {
        display: flex;
        justify-content: space-between;
                .weight {
          font-weight: 800;
        }
      }
    }
  }
}
</style>