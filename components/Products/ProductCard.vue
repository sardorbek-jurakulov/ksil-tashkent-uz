<template>
  <div>
    <nuxt-link class="
    d-flex 
    flex-column 
    justify-content-center 
    align-items-center 
    mb-3 
    mb-md-4
    " :to="{
      path: '/products/' + cardTitle,
      }">
      <h3 class="
      order-1 
      mb-3
      mb-md-4
      px-2
      ">{{ cardTitle }}</h3>
      <div 
      :style="{ 'background-image': `url(${cardImgPath1})` }"  
      class="
        mb-3
        mb-md-4
        card-img-div
      "></div>
    </nuxt-link>
  </div>
</template>

<script>
// import productsImgesPathes from "~/assets/img/products";
export default {
  data() {
    return {
      // productsImgesPathes,
      cardImgPath1: require('~/assets/img/products/slides/004202/1.png'),
    }
  },
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
    // cardImagesCategory: {
    //   type: String,
    //   required: true,
    // },
    // cardProductCompanyId: {
    //   type: Number,
    //   required: true,
    // },
    cardImgPath: {
      type: String,
      required: true,
    }
  },
  computed: {
    // cardProductImgPath() {
    //   return this.productsImgesPathes.find(categories => {
    //     category
    //   })
    // }
  }, 
  mounted() {
    return console.log(this.cardTitle);
  }
}
</script>

<style scoped>
.card-img-div {
  width: 300px;
  height: 300px;
  background-color: #ccc;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>