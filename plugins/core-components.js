import Vue from 'vue';

// import BackToTop from 'vue-backtotop';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import AppControlInput from '@/components/HomePage/ContactUs/AppControlInput.vue';

// Vue.use(BackToTop);
// Vue.component(BackToTop);
Vue.component("AppSiteHeader", SiteHeader);
Vue.component("AppControlInput", AppControlInput);
Vue.component("AppSiteFooter", SiteFooter);