import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHashHistory } from "vue-router";

// Views
import Book from "./views/Book.vue";
import Details from "./views/Details.vue";
import Add from "./views/Add.vue";
import Edit from "./views/Edit.vue";

// Config

const routes = [
  { path: "/", component: Book },
  { path: "/details/:id", component: Details, props: true },
  { path: "/add", component: Add },
  { path: "/edit/:id", component: Edit, props: true },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

createApp(App).use(router).mount("#app");
