import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
//import VueKonva from "vue-konva";
//Vue.use(VueKonva);
createApp(App).use(router).mount("#app");
