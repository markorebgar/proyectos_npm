import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductListView from "../views/ProductListView.vue";
import ProductCardView from "../views/ProductCardView.vue";
import CategoryListView from "../views/CategoryListView.vue";
import { components } from "vuetify/dist/vuetify.js";
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
    path: "/producto/:id",
    name: "product-detail",
    component: ProductCardView,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
