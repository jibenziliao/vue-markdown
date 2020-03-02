import Vue from "vue";
import App from "./App.vue";
import "./assets/index.scss"; // 或者使用 dark

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
