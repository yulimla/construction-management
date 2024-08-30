import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
const app = createApp(App);
const options = {
    position: POSITION.TOP_RIGHT,
};
app.use(Toast, options);
app.use(store);
app.use(router);
app.mount("#app");
