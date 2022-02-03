<template>
  <div>
    <app-banner></app-banner>
    <app-products-slider-galery></app-products-slider-galery>
    <app-products-types-list></app-products-types-list>
    <app-contact-us></app-contact-us>
    <!--<app-about-us></app-about-us>-->
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
}
</script>
