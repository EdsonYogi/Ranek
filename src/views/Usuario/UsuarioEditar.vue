<template>
  <section>
    <div>
      <h1 class="text-center my-5">Editar Usuário</h1>
      <FormularioUsuario>
        <button
          class="btn-atualizar-usuario btn-ranek"
          @click.prevent="atualizarUsuario"
        >Atualizar Dados</button>
      </FormularioUsuario>
    </div>
  </section>
</template>

<script>
import FormularioUsuario from "@/components/FormularioUsuario.vue";
import { api } from "@/services/services.js";

export default {
  name: "formularioUsuario",
  components: {
    FormularioUsuario
  },
  methods: {
    atualizarUsuario() {
      api
        .put(
          `/usuario/${this.$store.state.usuario.id}`,
          this.$store.state.usuario
        )
        .then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch(error => {
          window.console.log(error.response);
        });
    }
  }
};
</script>

<style scoped>
section {
  min-height: 100vh;
}

.btn-atualizar-usuario {
  display: block;
  width: 200px;
  height: 50px;
  margin: 0 auto;
}
</style>
