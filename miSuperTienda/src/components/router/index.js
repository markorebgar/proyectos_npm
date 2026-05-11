import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductListView from "../views/ProductListView.vue";
import CategoryListView from "../views/CategoryListView.vue";
import FavoriteListView from "../views/FavoriteListView.vue";
import ContactView from "../views/ContactView.vue";
import { components } from "vuetify/dist/vuetify.js";
import SecretView from "../views/SecretView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/productos",
    name: "products",
    component: ProductListView,
  },
  {
    path: "/categorias",
    name: "categories",
    component: CategoryListView,
  },
  {
    path: "/favoritos",
    name: "favorites",
    component: FavoriteListView,
  },
  {
    path: "/contacto",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/secreto",
    name: "secret",
    component: SecretView,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
