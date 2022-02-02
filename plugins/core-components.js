import Vue from 'vue';

// import BackToTop from 'vue-backtotop';
import SiteHeader from '@/components/SiteHeader.vue';
import SiteFooter from '@/components/SiteFooter.vue';

// Vue.use(BackToTop);
// Vue.component(BackToTop);
Vue.component("AppSiteHeader", SiteHeader);
Vue.component("AppSiteFooter", SiteFooter);