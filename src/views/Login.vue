<template>
  <section class="login">
    <div class="container">
      <div class="row justify-content-center">
        <h1 class="titulo my-5">Login</h1>
      </div>
      <div class="row">
        <form class="dados col-md-6 col-12 mx-auto">
          <div class="form-group">
            <label>Endereço de E-Mail</label>
            <input type="email" class="form-control form-control-lg" />
          </div>
          <div class="form-group">
            <label>Senha</label>
            <input type="password" class="form-control form-control-lg" />
          </div>
          <button type="submit" class="btn btn-ranek">Logar</button>
          <div class="esqueci-senha text-center my-2">
            <a href="/">Esqueci minha senha</a>
          </div>
        </form>
      </div>
      <CriarConta />
    </div>
  </section>
</template>

<script>
import CriarConta from "@/components/CriarConta.vue";

export default {
  name: "login",
  components: {
    CriarConta
  }
};
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  height: calc(100vh - 125px);
}

.login .titulo {
  color: #87f;
}

.login .dados label {
  color: #87f;
  font-size: 1.25em;
}

.login .dados input {
  border: none;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
}

.login .dados .esqueci-senha a {
  color: #87f;
}

.login .dados input:hover,
.login .dados input:focus {
  border: 1px solid #87f;
}

.login .dados button {
  display: block;
  width: 300px;
  margin: 0 auto;
}
</style>