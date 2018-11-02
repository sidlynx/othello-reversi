import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

import "./style/app.scss";
import "@fortawesome/fontawesome-free/js/all";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
