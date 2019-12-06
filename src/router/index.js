import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: () => import("@/views/Produto.vue"),
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/usuario",
    component: () => import("@/views/Usuario/Usuario.vue"),
    children: [
      {
        path: "",
        name: "usuario",
        component: () => import("@/views/Usuario/UsuarioProduto.vue")
      },
      {
        path: "venda",
        name: "venda",
        component: () => import("@/views/Usuario/UsuarioVenda.vue")
      },
      {
        path: "compra",
        name: "compra",
        component: () => import("@/views/Usuario/UsuarioCompra.vue")
      },
      {
        path: "editar",
        name: "editar",
        component: () => import("@/views/Usuario/UsuarioEditar.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

export default router;
