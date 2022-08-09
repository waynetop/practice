import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import 'amfe-flexible'; // rem h5 适配
import './styles/normalize.less';

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the development environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock');
  mockXHR();
}

if (process.env.NODE_ENV === 'development') {
  Vue.config.devtools = true;
}

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
