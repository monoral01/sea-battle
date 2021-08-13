import { createRouter, createWebHashHistory } from "vue-router";
import Game from "../views/Game";
import SetFields from "../views/SetFields";
import Main from "../views/Main";
const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/setfields",
    component: SetFields,
  },
  {
    path: "/game",
    component: Game,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
