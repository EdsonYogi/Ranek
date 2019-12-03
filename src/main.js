import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import Loading from "@/components/Loading.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSearch,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faChevronLeft, faChevronRight);

Vue.filter("conversaoPreco", valor => {
  valor = Number(valor);
  if (!isNaN(valor)) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  } else {
    return "";
  }
});

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("Loading", Loading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BootstrapVue,
  render: h => h(App)
}).$mount("#app");
