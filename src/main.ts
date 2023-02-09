import { createPinia } from "pinia";
import { createApp } from "vue";
import App from './App.vue'
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./assets/style.css";

const pinia = createPinia();

loadFonts();

createApp(App).use(vuetify).use(pinia).mount("#app");
