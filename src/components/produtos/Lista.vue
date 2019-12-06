<template>
  <div class="lista-produtos">
    <transition mode="out-in">
      <div v-if="produtos && produtos.length > 0" key="produtos-lista">
        <div class="row no-gutter justify-content-center">
          <router-link
            class="produto-link col-md-4 col-12 p-0"
            :to="{ name: 'produto', params: { id: produto.id } }"
            v-for="produto in produtos"
            :key="produto.id"
          >
            <div class="produto-info p-3 m-3">
              <div class="img"></div>
              <p class="preco">{{ produto.preco | conversaoPreco }}</p>
              <h1 class="titulo text-truncate">{{ produto.produto }}</h1>
              <p class="descricao text-truncate">{{ produto.descricao }}</p>
            </div>
          </router-link>
        </div>
        <div class="row justify-content-center">
          <Paginacao
            :limiteProdutos="limiteProdutos"
            :totalProdutos="totalProdutos"
          />
        </div>
      </div>
      <div
        v-else-if="produtos && produtos.length === 0"
        key="mensagem-resultado"
      >
        <p class="text-center">
          Nenhum resultado encontrado. Use palavras-chave diferentes.
        </p>
      </div>
      <div class="row align-items-center" v-else key="loading-produtos">
        <Loading />
      </div>
    </transition>
  </div>
</template>

<script>
import { api } from "@/services/services.js";
import Paginacao from "@/components/Paginacao.vue";

export default {
  name: "produtos",
  components: {
    Paginacao
  },
  data() {
    return {
      produtos: null,
      limiteProdutos: 9,
      totalProdutos: 0
    };
  },
  computed: {
    url() {
      let searchQuery = "";
      for (let key in this.$route.query) {
        searchQuery += `&${key}=${this.$route.query[key]}`;
      }
      return `/produtos?_limit=${this.limiteProdutos}` + searchQuery;
    }
  },
  methods: {
    getProdutos() {
      api.get(this.url).then(produtos => {
        this.totalProdutos = +produtos.headers["x-total-count"];
        this.produtos = produtos.data;
      });
    }
  },
  watch: {
    url() {
      this.getProdutos();
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style scoped>
.lista-produtos {
  min-height: calc(100vh - 125px);
}
.produto-link {
  max-width: 320px;
}

.produto-info {
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.produto-info .titulo {
  font-size: 1.5em;
}

.produto-info .preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5em;
}

.produto-info .img {
  display: block;
  width: 100%;
  height: 300px;
  border: 1px solid black;
}
</style>
