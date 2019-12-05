<template>
  <header>
    <nav>
      <div class="container-fluid bg-transparent p-0">
        <ul class="menu nav justify-content-between align-items-center px-3">
          <li class="nav-item">
            <router-link to="/">
              <img class="logo" src="@/assets/ranek.svg" alt="logo" />
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              class="login btn btn-ranek btn-lg"
              v-if="$store.state.login"
              to="/usuario"
            >{{nome}}</router-link>
            <router-link class="login btn btn-ranek btn-lg" v-else to="/login" tag="button">Login</router-link>
          </li>
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
  }
};
</script>


<style scoped>
.menu {
  height: 75px;
  box-shadow: 0px 5px 2px rgba(0, 0, 0, 0.25);
}

.logo {
  width: 100px;
}

.login {
  width: 200px;
}
</style>
