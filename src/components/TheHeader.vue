<template>
  <header>
    <div class="container">
      <div class="cabecalho row">
        <router-link class="logo" to="/">
          <img src="@/assets/ranek.svg" alt="logo" />
        </router-link>
        <router-link class="login btn-ranek" to="/login" v-if="!$store.state.login">
          <font-awesome-icon icon="user" />
        </router-link>
        <div v-else>
          <button class="logado btn-ranek" @click="dropdownAction">
            {{nome}}
            <font-awesome-icon icon="caret-down" />
          </button>
          <ul class="dropdown-lista" v-if="dropdown">
            <li>
              <router-link class="btn-ranek" :to="{name: 'usuario'}">Produtos</router-link>
            </li>
            <li>
              <router-link class="btn-ranek" :to="{name: 'venda'}">Vendas</router-link>
            </li>
            <li>
              <router-link class="btn-ranek" :to="{name: 'compra'}">Compras</router-link>
            </li>
            <li>
              <router-link class="btn-ranek" :to="{name: 'editar'}">Editar Perfil</router-link>
            </li>
            <li>
              <button class="btn-ranek" to @click="deslogarUsuario ">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "TheHeader",
  data() {
    return {
      dropdown: false
    };
  },
  computed: {
    nome() {
      return this.$store.state.usuario.nome;
    }
  },
  methods: {
    dropdownAction() {
      this.dropdown = !this.dropdown;
    },
    deslogarUsuario() {
      this.dropdown = false;
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 75px;
  box-shadow: 5px 0 5px rgba(0, 0, 0, 0.5);
}

.cabecalho {
  justify-content: space-between;
  align-items: center;
}

.cabecalho .logo img {
  width: 200px;
  max-height: 50px;
}

.cabecalho .login {
  border-radius: 100%;
}

.cabecalho .login svg {
  width: 50px;
  height: 50px;
  padding: 10px;
}

.cabecalho .logado {
  max-height: 50px;
  width: 200px;
  padding: 10px;
}

.dropdown-lista {
  position: absolute;
  z-index: 999;
  padding: 0;
}

.dropdown-lista li {
  list-style: none;
}

.dropdown-lista a,
.dropdown-lista button {
  display: flex;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
}
</style>