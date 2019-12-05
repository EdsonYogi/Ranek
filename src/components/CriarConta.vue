<template>
  <div class="criar-conta my-5">
    <h2 class="text-center my-3">Crie a Sua Conta</h2>
    <transition mode="out-in">
      <button v-if="!criar" class="btn btn-ranek" @click="criar = true">Criar Conta</button>
      <FormularioUsuario v-else />
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