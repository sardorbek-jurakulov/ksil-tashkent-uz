<template>
  <div>
    <h2>ДЕТСКИЕ ИГРОВЫЕ И СПОРТИВНЫЕ ПЛОЩАДКИ</h2>
    <VueSlickCarousel 
      :arrows="true" 
      :dots="true" 
      :autoplay="true" 
      :autoplaySpeed="3000" 
      :rows="1" 
      :slidesPerRow="3"
      ref="carousel"
    >
      <div>
        <img src="@/assets/img/slider/slider-1.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-2.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-3.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-4.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-5.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-6.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-7.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-8.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-9.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-10.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-11.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-12.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-13.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-14.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-15.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-16.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-17.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-18.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-19.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-20.jpg" alt="slide" width="300" height="250">
      </div>
      <div>
        <img src="@/assets/img/slider/slider-21.jpg" alt="slide" width="300" height="250">
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
}
</script>