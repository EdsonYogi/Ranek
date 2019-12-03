<template>
  <section class="produto">
    <div class="container">
      <div class="row" v-if="produto" key="produto">
        <div class="col-md-6 col-12">
          <div class="img"></div>
        </div>
        <div class="informacoes col-md-6 col-12">
          <h1>{{produto.produto}}</h1>
          <span>{{produto.preco | conversaoPreco}}</span>
          <p class="my-4">{{produto.descricao}}</p>
          <button type="button" class="btn btn-ranek btn-lg">Comprar</button>
        </div>
      </div>
      <div class="row align-items-center" v-else key="loading-produtos">
        <Loading />
      </div>
    </div>
  </section>
</template>

<script>
import { api } from "@/services/services.js";

export default {
  name: "produto",
  props: ["id"],
  data() {
    return {
      produto: ""
    };
  },
  methods: {
    getProdutos() {
      api.get(`/produtos/${this.id}`).then(produto => {
        this.produto = produto.data;
      });
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style scoped>
.produto {
  height: calc(100vh - 125px);
  display: flex;
  align-items: center;
}

.produto .img {
  display: block;
  width: 100%;
  height: 600px;
  border: 1px solid black;
}

.produto .informacoes h1 {
  font-size: 2em;
}

.produto .informacoes span {
  color: #e80;
  font-weight: bold;
  font-size: 1.5em;
}
</style>