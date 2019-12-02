<template>
  <div>
    <div class="paginas row align-items-center">
      <ul class="pagination">
        <li class="page-item">
          <router-link class="anterior page-link" :to="{query: query(anterior)}">
            <font-awesome-icon icon="chevron-left" />
          </router-link>
        </li>
        <li class="page-item" v-for="(pagina) in  paginasTotal" :key="pagina">
          <router-link class="proximo page-link" :to="{query: query(pagina)}">{{pagina}}</router-link>
        </li>
        <li class="page-item">
          <router-link class="anterior page-link" :to="{query: query(proxima)}">
            <font-awesome-icon icon="chevron-right" />
          </router-link>
        </li>
      </ul>
    </div>
    <div class="row">
      <p class="mx-auto">Página {{atual}} de {{paginasTotal}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "paginacao",
  props: {
    limiteProdutos: {
      type: Number,
      default: 1
    },
    totalProdutos: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      atual: this.$route.query._page,
      anterior: 0,
      proxima: 0,
      status: ""
    };
  },
  computed: {
    paginasTotal() {
      const totalPaginas = this.totalProdutos / this.limiteProdutos;
      return totalPaginas !== Infinity ? Math.ceil(totalPaginas) : 0;
    }
  },
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina
      };
    },
    paginaAtual() {
      this.atual = this.$route.query._page;
      this.paginaAnterior();
      this.proximaPagina();
    },
    paginaAnterior() {
      if (this.atual > 1) {
        this.anterior = this.atual - 1;
      } else {
        this.anterior = this.atual;
      }
    },
    proximaPagina() {
      if (this.atual < this.paginasTotal) {
        this.proxima = this.atual + 1;
      } else {
        this.proxima = this.atual;
      }
    }
  },
  created() {
    this.$route.query._page = 1;
    this.paginaAtual();
  },
  updated() {
    this.paginaAtual();
  }
};
</script>

<style scoped>
.paginas .page-link {
  color: #87f;
}

.paginas .router-link-exact-active {
  color: white;
  background-color: #87f;
}
</style>