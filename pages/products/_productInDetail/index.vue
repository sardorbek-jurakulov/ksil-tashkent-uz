<template>
  <div>
    <h2>Детские {{ pageCategory }}</h2>
    <div class="
    container 
    product-card-container
    ">
      <app-product-card v-for="(getProduct, indexOfProduct) of getProducts" :key="indexOfProduct" :cardTitle="getProduct.name" :cardImgPath="getProduct.imagesPath[0]"></app-product-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageCategory: '', 
    }
  },
  computed: {
    getProducts() {
      let productInDetail = this.$store.getters.productsByCategory(this.$route.params.productInDetail);
      this.pageCategory = productInDetail[0].category; 
      return  productInDetail;
    }
  }
}
</script>
<style></style>