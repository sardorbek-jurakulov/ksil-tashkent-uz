<template>
  <div>
    <app-banner></app-banner>
    <app-products-slider-galery></app-products-slider-galery>
    <app-products-types-list></app-products-types-list>
    <!--<app-contact-us></app-contact-us>
    <app-about-us></app-about-us>-->
    <button @click="topFunction" id="myBtn" title="Go to top">Top</button>
  </div>
</template>

<script>
import Banner from '@/components/HomePage/Banner';
import ProductsSliderGalery from '@/components/HomePage/ProductsSliderGalery';
import ProductsTypesList from '@/components/HomePage/ProductsTypesList';
import ContactUs from '@/components/HomePage/ContactUs';
import AboutUs from '@/components/HomePage/AboutUs';
export default {
  name: 'IndexPage',
  components: {
    AppBanner: Banner,
    AppProductsSliderGalery: ProductsSliderGalery,
    AppProductsTypesList: ProductsTypesList,
    AppContactUs: ContactUs,
    AppAboutUs: AboutUs,
  },
  data() {
    return {
      mybutton: document.getElementById("myBtn")
    }
  },
  methods: {
    scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    },
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },

  mounted() {
    return window.onscroll = function() {scrollFunction()};
  }
}
</script>
