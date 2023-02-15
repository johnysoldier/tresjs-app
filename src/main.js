import { createApp } from "vue";
import App from "./App.vue";
import Tres from "@tresjs/core";

import "./assets/main.css";

createApp(App).use(Tres).mount("#app");
