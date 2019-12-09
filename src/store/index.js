import Vue from "vue";
import Vuex from "vuex";
import { api } from "@/services/services.js";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cep: "",
      cidade: "",
      estado: ""
    },
    usuarioProduto: null
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USUARIO_PRODUTO(state, payload) {
      state.usuarioProduto = payload;
    },
    ADD_USUARIO_PRODUTO(state, payload) {
      state.usuarioProduto.unshift(payload);
    }
  },
  actions: {
    getUsuario(context, payload) {
      return api.get(`/usuario/${payload}`).then(response => {
        context.commit("UPDATE_USUARIO", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    getUsuarioProduto(context) {
      api
        .get(`/produtos?usuario_id=${context.state.usuario.id}`)
        .then(response => {
          context.commit("UPDATE_USUARIO_PRODUTO", response.data);
        });
    },
    cadastrarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.email });
      return api.post("/usuario", payload);
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        id: "",
        nome: "",
        email: "",
        senha: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cep: "",
        cidade: "",
        estado: ""
      }),
        context.commit("UPDATE_LOGIN", false);
    }
  },
  modules: {}
});
