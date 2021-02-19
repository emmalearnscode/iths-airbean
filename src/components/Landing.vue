<template>
  <div class="landing" v-if="!killMe">
    <div class="landing-wrapper">
      <img src="@/assets/intro-graphic-left.svg" alt="" />
      <img src="@/assets/intro-graphic-right.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      killMe: false,
    };
  },
  created() {
    setTimeout(() => {
      this.killMe = !this.killMe;
    }, 2000);
  },
};
</script>

<style lang="scss">
$pink: #f3e4e1;
$brown: #2f2926;
$dark-green: #0e927d;
$orange: #e5674e;

.landing {
  z-index: 3;
  height: 100vh;
  width: 100vw;
  background: $dark-green;
  .landing-wrapper {
    background-image: url('~@/assets/airbean-landing.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    p {
      color: white;
    }
    > img {
      min-height: 100%;
    }
  }
}
</style>