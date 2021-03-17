import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "highlight.js/styles/github.css";
import router from './router'
Vue.config.productionTip = false;
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons);

new Vue({
    store,
    router,
    render: (h) => h(App)
}).$mount("#app");
