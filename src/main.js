import Vue from 'vue'
import App from './App.vue'
import './assets/scss/all.scss'
import VueFullPage from 'vue-fullpage.js'
import 'fullpage.js/dist/fullpage.css'

Vue.use(VueFullPage);

new Vue({
  el: '#app',
  render: h => h(App)
});
