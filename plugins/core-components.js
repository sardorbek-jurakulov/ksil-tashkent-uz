import Vue from 'vue';

// import BackToTop from 'vue-backtotop';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import Products from '@/components/Products/Products.vue';
import ProductCard from '@/components/Products/ProductCard.vue';
import ProductInDetail from '@/components/Products/ProductInDetail.vue';
import AppControlInput from '@/components/HomePage/ContactUs/AppControlInput.vue';

// Vue.use(BackToTop);
// Vue.component(BackToTop);
Vue.component("AppSiteHeader", SiteHeader);
Vue.component("AppProducts", Products);
Vue.component("AppProductCard", ProductCard);
Vue.component("AppProductInDetail", ProductInDetail);
Vue.component("AppControlInput", AppControlInput);
Vue.component("AppSiteFooter", SiteFooter);