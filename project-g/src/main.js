// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

const frontend = resolve => require(['./components/frontend/index'], resolve)
const backend = resolve => require(['./components/backend/index'], resolve)

const routes = [
  { path: '/', component: frontend },
  { path: '/site', component: frontend },
  { path: '/site/admin', component: backend },
  { path: '/admin', component: backend }
]

const router = new VueRouter({
  routes
})

new Vue({
  router
}).$mount('#projectG')
