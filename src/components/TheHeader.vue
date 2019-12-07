<template>
  <header>
    <nav>
      <div class="container p-0">
        <ul class="menu nav justify-content-between align-items-center px-3">
          <li class="nav-item">
            <router-link to="/">
              <img class="logo" src="@/assets/ranek.svg" alt="logo" />
            </router-link>
          </li>
          <div class="row">
            <b-dropdown split text="Menu" class="m-md-2" to="/usuario" v-if="$store.state.login">
              <b-dropdown-item>
                <router-link :to="{ name: 'usuario' }">Produtos</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link :to="{ name: 'venda' }">Vendas</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link :to="{ name: 'compra' }">Compras</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link :to="{ name: 'editar' }">Editar Perfil</router-link>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item @click="deslogarUsuario">
                <div class="deslogar">
                  <span>Logout</span>
                  <font-awesome-icon icon="sign-out-alt" />
                </div>
              </b-dropdown-item>
            </b-dropdown>
            <router-link class="login btn btn-ranek btn-lg" v-else to="/login" tag="button">
              <font-awesome-icon icon="user" />
            </router-link>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    nome() {
      return this.$store.state.usuario.nome;
    }
  },
  methods: {
    deslogarUsuario() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
nav {
  background-color: transparent;
  width: 100%;
  height: 75px;
  box-shadow: 0px 5px 2px rgba(0, 0, 0, 0.25);
}

.menu {
  min-height: 75px;
}

.menu .logo {
  width: 175px;
  height: auto;
}

.logo {
  width: 100px;
}

.login {
  font-size: 1.5em;
  text-transform: uppercase;
  width: 50px;
  height: 50px;
  padding: 0;
  border-radius: 50%;
}

#__BVID__17__BV_button_ > input[to="/usuario"] {
  margin: 0;
}

.logado {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 175px;
  height: 40px;
  padding: 0;
  border-radius: 5px;
}

.logado span {
  font-size: 1em;
}

.logado svg {
  font-size: 1.25em;
}

.logado svg {
  margin-right: 10px;
}

.deslogar {
  color: #87f;
}
.deslogar svg {
  margin-left: 10px;
}
</style>
