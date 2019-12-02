<template>
  <section class="home">
    <div class="container">
      <h1 class="title text-center text-uppercase">🛒 Buy or Sell 💰</h1>
      <BuscarProdutos />
      <ListaProdutos />
    </div>
  </section>
</template>

<script>
import ListaProdutos from "@/components/produtos/Lista.vue";
import BuscarProdutos from "@/components/produtos/Buscar.vue";

export default {
  name: "home",
  components: {
    ListaProdutos,
    BuscarProdutos
  }
};
</script>

<style scoped>
.home {
  margin: 50px 0;
}

.home .title {
  color: #87f;
}
</style>