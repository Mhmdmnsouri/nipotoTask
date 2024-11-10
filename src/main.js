import { createApp } from "vue";
import "./assets/styles/tailwind.css";
import "./assets/styles/main.css";
import App from "./App.vue";
import router from "./router/routes";

createApp(App).use(router).mount("#app");
