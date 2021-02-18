<template>
  <div class="landing" v-if="!killMe">
    <div class="landing-wrapper"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countDown: 100,
      killMe: false,
    };
  },
  watch: {
    countDown(value) {
      if (value < 1) {
        this.killMe = true;
      }
    },
  },
  created() {
    setInterval(() => {
      this.countDown--;
    }, 50);
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
  .landing-wrapper {
      background: $dark-green;
      height: 100%;
      width: 100%;
    p {
      color: white;
    }
  }
}
</style>