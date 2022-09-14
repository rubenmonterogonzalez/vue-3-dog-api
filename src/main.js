import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import DogsList from "./components/DogsList.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.component("DogsList", DogsList);

app.use(ElementPlus);

app.mount("#app");
