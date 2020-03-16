import Vue from 'vue';
import App from './App.vue';

import './styles/base.less';

import './styles/iconfont.less';
import 'lib-flexible';

import router from './router';

// ------------------axios的优化-----------------------------
import axios from 'axios';
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:3000';

// -----------导入vant-ui-------------------------------------------

// import 'vant/lib/index.css';
// import Vant from 'vant';
// Vue.use(Vant);

import { Toast } from 'vant';
Vue.use(Toast);

// -----------------------公共组件--------------------------------------
import HmHeader from './components/HmHeader.vue';
Vue.component('HmHeader', HmHeader);

import HmLogin from './components/HmLogin.vue';
Vue.component('HmLogin', HmLogin);

import HmLoginBtn from './components/HmLoginBtn.vue';
Vue.component('HmLoginBtn', HmLoginBtn);

import HmInput from './components/HmInput.vue';
Vue.component('HmInput', HmInput);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
