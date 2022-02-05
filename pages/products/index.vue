<template>
  <div>
    <h2>Products</h2>
    <div class="
    container 
    product-card-container
    ">
      <!--<app-product-card v-for="()" key=""></app-product-card>-->
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getProducts() {
      return this.$store.getters.();
    }
  }
}
</script>

<style></style>