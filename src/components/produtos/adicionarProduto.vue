<template>
  <div class="adicionar-produtos col-md-6 mx-auto my-5">
    <h1 class="text-center">Adicionar Produto</h1>
    <button class="btn-ranek" @click="adicionarProdutoActive" v-if="!adicionar">Adicionar Produto</button>
    <form v-else>
      <div>
        <label for="produto">Produto</label>
        <input type="text" name="produto" v-model="produto.produto" />
      </div>
      <div>
        <label for="preco">Preço</label>
        <input type="number" name="preco" v-model="produto.preco" />
      </div>
      <div>
        <label for="descricao">Descricão</label>
        <textarea name="descricao" cols="30" rows="10" v-model="produto.descricao"></textarea>
      </div>
      <div>
        <label for="foto">Adicionar Foto</label>
        <input class="foto" type="file" name="foto" ref="produto.foto" />
      </div>
      <button class="btn-ranek" @click.prevent="adicionarProduto">Adicionar Produto</button>
    </form>
  </div>
</template>

<script>
import { api } from "@/services/services.js";
export default {
  name: "adionarProduto",
  data() {
    return {
      produto: {
        produto: "",
        preco: "",
        descricao: "",
        foto: "",
        vendido: "false"
      },
      adicionar: false
    };
  },
  methods: {
    adicionarProdutoActive() {
      this.adicionar = !this.adicionar;
    },
    adicionarProduto() {
      this.produto.id_usuario = this.$store.state.usuario.id;
      api.post("/produtos", this.produto).then(() => {
        this.$store.dispatch("getUsuarioProduto");
      });
    }
  }
};
</script>

<style scoped>
.adicionar-produtos label {
  display: block;
  margin: 10px 0;
  color: #87f;
}

.adicionar-produtos input {
  display: block;
  width: 100%;
}

.adicionar-produtos .foto {
  padding: 5px;
  color: #87f;
}

.adicionar-produtos textarea {
  display: block;
  width: 100%;
  height: 100px;
}

.adicionar-produtos input:hover,
.adicionar-produtos input:focus,
.adicionar-produtos textarea:hover,
.adicionar-produtos textarea:focus {
  border: 1px solid #87f;
}

.adicionar-produtos button {
  display: block;
  width: 200px;
  height: 50px;
  margin: 10px auto;
}
</style>