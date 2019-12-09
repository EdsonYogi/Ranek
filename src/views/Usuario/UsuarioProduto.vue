<template>
  <section>
    <div class="container">
      <AdionarProduto />
      <h2>Seus Produtos</h2>
      <transition-group class="row" v-if="usuarioProduto" name="list" tag="ul">
        <li class="col-lg-6" v-for="(produto) in usuarioProduto" :key="produto.id">
          <button class="deletar-produto ml-auto" @click.prevent="deletarProduto(produto.id)">
            <font-awesome-icon icon="minus-square" />
          </button>
          <ProdutoItem :produto="produto" />
        </li>
      </transition-group>
    </div>
  </section>
</template>

<script>
import AdionarProduto from "@/components/produtos/adicionarProduto.vue";
import ProdutoItem from "@/components/produtos/produtoItem.vue";
import { mapState, mapActions } from "vuex";
import { api } from "@/services/services.js";

export default {
  name: "usuarioProduto",
  components: {
    AdionarProduto,
    ProdutoItem
  },
  computed: {
    ...mapState(["login", "usuario", "usuarioProduto"])
  },
  methods: {
    ...mapActions(["getUsuarioProduto"]),
    deletarProduto(id) {
      const confirmacao = window.confirm("Deseja remover este produto?");
      if (confirmacao) {
        api
          .delete(`/produtos/${id}`)
          .then(() => {
            this.getUsuarioProduto();
          })
          .catch(error => {
            window.console.log(error.response);
          });
      }
    }
  },
  watch: {
    login() {
      this.getUsuarioProduto();
    }
  },
  created() {
    if (this.login) {
      this.getUsuarioProduto();
    }
  }
};
</script>

<style scoped>
ul {
  padding: 0;
}
li {
  list-style: none;
}

.deletar-produto {
  display: block;
  border: 0;
  padding: 0;
}

.deletar-produto svg {
  display: block;
  width: 30px;
  height: 30px;
  padding: 0;
  border: 2px solid #87f;
  color: #87f;
}
</style>
