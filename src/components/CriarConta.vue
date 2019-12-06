<template>
  <div class="criar-conta my-5">
    <h2 class="text-center my-3">Crie a Sua Conta</h2>
    <transition mode="out-in">
      <button v-if="!criar" class="btn btn-ranek" @click="criar = true">
        Criar Conta
      </button>
      <FormularioUsuario v-else>
        <button class="btn btn-ranek" @click.prevent="cadastrarUsuario">
          Criar Conta
        </button>
      </FormularioUsuario>
    </transition>
  </div>
</template>

<script>
import FormularioUsuario from "@/components/FormularioUsuario.vue";

export default {
  name: "CriarConta",
  components: {
    FormularioUsuario
  },
  data() {
    return {
      criar: false
    };
  },
  methods: {
    async cadastrarUsuario() {
      try {
        await this.$store.dispatch(
          "cadastrarUsuario",
          this.$store.state.usuario
        );
        await this.$store.dispatch("getUsuario", this.$store.state.usuario.id);
        this.$router.push({ name: "usuario" });
      } catch (error) {
        window.console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.criar-conta {
  color: #87f;
}

.criar-conta button {
  display: block;
  width: 300px;
  margin: 0 auto;
}
</style>
