<template>
  <div class="container p-5 mb-5" id="productsSliderGalery">
    <h2 class="text-center text-primary mb-5">ДЕТСКИЕ ИГРОВЫЕ И СПОРТИВНЫЕ ПЛОЩАДКИ</h2>
    <VueSlickCarousel 
      :arrows="true" 
      :dots="true" 
      :autoplay="true" 
      :autoplaySpeed="3000" 
      :rows="1" 
      :slidesPerRow="3" 
      :responsive='[
          {
            "breakpoint": 1200,
            "settings": {
              "slidesPerRow": 2,
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesPerRow": 1,
            }
          }
        ]'
      ref="carousel" 
      class="
        d-flex 
        align-items-center 
        justify-content-center 
        ">
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-1.jpg" alt="slide" width="380" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-2.jpg" alt="slide" width="400" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-3.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-4.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-5.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-6.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-7.jpg" alt="slide" width="270" height="260">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-8.jpg" alt="slide" width="210" height="240">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-9.png" alt="slide" width="320" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-10.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-11.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-12.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-13.jpg" alt="slide" width="280" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-14.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-15.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-16.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-17.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-18.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-19.jpg" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-20.png" alt="slide" width="300" height="250">
      </div>
      <div class="
      d-inline-flex 
      align-items-center 
      justify-content-center
      ">
        <img src="@/assets/img/slider/slider-21.png" alt="slide" width="300" height="250">
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
}
</script>

<style scoped>

</style>