import Vue from 'vue';
import App from './App';
import Index from './views/index.vue';
import Goods from './views/goods.vue';
import Cart from './views/cart.vue';

import VueRouter from 'vue-router';
import Element from 'element-ui';

Vue.use(VueRouter);
Vue.use(Element);

const routes = [
  {path: '/', redirect: '/index'},
  { path: '/index', component: Index },
  { path: '/goods', component: Goods },
  { path: '/cart', component: Cart }
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
});
