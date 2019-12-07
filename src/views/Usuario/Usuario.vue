<template>
  <section class="usuario">
    <div class="menu-usuario">
      <div class="row"></div>
    </div>
    <div class="pagina">
      <transition mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "usuario"
};
</script>

<style scoped>
.menu-usuario {
  margin: 10px 30px;
}
.menu-usuario ul {
  padding: 5px 10px;
}

.menu-usuario ul li {
  margin: 5px 0;
  padding: 0;
}

.pagina {
  min-height: calc(100vh - 125px);
}
</style>
