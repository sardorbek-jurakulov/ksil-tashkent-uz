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
      :style="{backgroundImage: cardImgPath}"  
      class="
        mb-3
        mb-md-4
      "></div>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    cardTitle: {
      type: String,
      required: true,
    },
    cardImgPath: {
      type: String,
      required: true,
    }
  }
}
</script>
<style></style>