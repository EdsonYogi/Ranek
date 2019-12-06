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
            <li class="nav-item">
              <router-link
                class="logado btn btn-ranek btn-lg"
                v-if="$store.state.login"
                to="/usuario"
                ><font-awesome-icon icon="user" /> {{ nome }}</router-link
              >
              <router-link
                class="login btn btn-ranek btn-lg"
                v-else
                to="/login"
                tag="button"
                ><font-awesome-icon icon="user"
              /></router-link>
            </li>
            <li class="ml-2" v-if="$store.state.login">
              <button
                class="deslogar btn btn-ranek btn-lg"
                @click="deslogarUsuario"
              >
                <font-awesome-icon icon="sign-out-alt" />
              </button>
            </li>
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
  width: 60px;
  height: 60px;
  padding: 0;
  border-radius: 50%;
}

.logado {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  width: 175px;
  height: 50px;
  padding: 0;
  border-radius: 5px;
}

.logado svg {
  margin-right: 10px;
}

.deslogar {
  height: 50px;
}
</style>
