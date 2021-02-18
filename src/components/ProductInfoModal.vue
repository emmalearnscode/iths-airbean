<template>

<section>
  <span class="close" @click="closeModal">x</span>
  <h3>{{currentProd.title}}</h3>
<p>{{currentProd.extraInfo}}</p>
</section>

</template>

<script>
export default {
props: {
  currentProd: {
    type: Object
  }
},
methods: {
  closeModal() {
    this.$emit("closeTheModal")
  }
}
}
</script>

<style lang="scss" scoped>
$brown: #2F2926;
section {
  width: 90%;
  min-height: 35rem;
  background-color: white;
  border-radius: 5px;
  z-index: 1;
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0.5px 0.5px 10px $brown;
 
  
  padding: 1.5rem;

  h3 {
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    line-height: 1.6;
  }

  .close {
    background-color: $brown;
    padding: 1rem;
    color: white;
    text-transform: uppercase;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 1.2rem;
  }
}
</style>