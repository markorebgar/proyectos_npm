import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./components/router";

createApp(App).use(vuetify).use(router).mount("#app");
