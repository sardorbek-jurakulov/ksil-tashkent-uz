<template>
  <div>
    <h2>Products</h2>
    <div class="
    container 
    product-card-container
    ">
      <!--<app-product-card v-for="()" key=""></app-product-card>-->
      <pre>{{ getProducts }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getProducts() {
      console.log('assdfasdf');
       return this.$store.getters.productsByCategory(this.$route.params.productInDetail);
    }
  }
}
</script>

<style></style>