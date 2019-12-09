<template>
  <router-link>
    <div class="row">
      <div class="img col-4">
        <img src alt />
      </div>
      <div class="col-8">
        <h1 class="text-truncate">{{produto.produto}}</h1>
        <span>{{produto.preco}}</span>
        <p class="text-truncate">{{produto.descricao}}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "produtoItem",
  props: ["produto"]
};
</script>

<style scoped>
.img {
  display: block;
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
</style>