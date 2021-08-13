import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import draggable from "vuedraggable";
import axios from "axios";
import VueAxios from "vue-axios";
App.provide("axios", App.config.globalProperties.axios);
createApp(App).use(router).use(draggable).use(VueAxios, axios).mount("#app");
