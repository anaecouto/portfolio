import mitt from "mitt";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router/index.js";

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.use(router).mount("#app");
