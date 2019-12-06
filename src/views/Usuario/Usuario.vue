<template>
  <div class="usuario">
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-toggle class="ml-auto" target="menu-usuario">
        <font-awesome-icon icon="bars" />
      </b-navbar-toggle>
      <b-collapse class="justify-content-center" id="menu-usuario" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'usuario' }">Produtos</b-nav-item>
          <b-nav-item :to="{ name: 'venda' }">Vendas</b-nav-item>
          <b-nav-item :to="{ name: 'compra' }">Compras</b-nav-item>
          <b-nav-item :to="{ name: 'editar' }">Editar Perfil</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="pagina">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "usuario"
};
</script>

<style scoped>
.usuario nav {
  width: 100%;
  height: 50px;
  padding: 0;
  background-color: #87f;
}

.usuario nav button {
  border: 1px solid white;
  color: white;
  font-size: 1.5em;
  margin: 7px 20px 7px 0;
}

#menu-usuario {
  background-color: #87f;
}

#menu-usuario li {
  text-align: right;
  margin: 0 20px;
}

#menu-usuario a {
  color: white;
  text-transform: uppercase;
  letter-spacing: 2.5px;
}

.pagina {
  min-height: calc(100vh - 125px);
}
</style>
