<template>
  <div>
    <h1>Finalizar Compra</h1>
    <FormularioUsuario />
    <button class="btn-finalizar-compra btn-ranek" @click.prevent="finalizarCompra">Finalizar Compra</button>
  </div>
</template>

<script>
import FormularioUsuario from "@/components/FormularioUsuario.vue";
import { api } from "@/services/services.js";
import { mapState } from "vuex";

export default {
  name: "finalizarCompra",
  props: ["produto"],
  components: {
    FormularioUsuario
  },
  computed: {
    ...mapState(["usuario"]),
    comprar() {
      return {
        comprador: this.usuario.id,
        vendedor: this.produto.id_usuario,
        produto: this.produto,
        endereco: {
          logradouro: this.usuario.logradouro,
          numero: this.usuario.numero,
          bairro: this.usuario.bairro,
          cep: this.usuario.cep,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado
        }
      };
    }
  },
  methods: {
    criarTransacao() {
      return api.post("/transacao", this.comprar).then(() => {
        this.$router.push({ name: "compra" });
      });
    },
    async cadastrarUsuario() {
      try {
        await this.$store.dispatch(
          "cadastrarUsuario",
          this.$store.state.usuario
        );
        await this.$store.dispatch(
          "getUsuario",
          this.$store.state.usuario.email
        );
        await this.criarTransacao();
      } catch (error) {
        window.console.log(error);
      }
    },
    finalizarCompra() {
      if (this.$store.state.login) {
        this.criarTransacao();
      } else {
        this.cadastrarUsuario();
      }
    }
  },
  created() {
    window.console.log(this.produto);
  }
};
</script>

<style scoped>
.btn-finalizar-compra {
  display: block;
  width: 200px;
  height: 50px;
  margin: 0 auto;
}
</style>