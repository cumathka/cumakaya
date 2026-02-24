import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 800, once: true, offset: 80 });

createApp(App).mount("#app");
