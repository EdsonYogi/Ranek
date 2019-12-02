<template>
  <div class="buscar row justify-content-center my-5">
    <div class="input-group col-md-6 col mb-3">
      <input
        class="form-control"
        type="search"
        name="busca"
        id="busca"
        placeholder="Buscar..."
        v-model="buscar"
        @keyup.enter="buscarProduto"
      />
      <div class="input-group-append">
        <button class="btn btn-search" type="submit" id="buscar" @click.prevent="buscarProduto">
          <font-awesome-icon icon="search" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buscar: ""
    };
  },
  methods: {
    buscarProduto() {
      this.$router.push({
        query: {
          q: this.buscar
        }
      });
    }
  }
};
</script>

<style scoped>
.btn-search {
  height: 38px;
  border: 1px solid rgb(206, 212, 218);
}

.btn-search:hover {
  height: 38px;
  border: 1px solid #87f;
  background-color: #87f;
  color: white;
}
</style>
