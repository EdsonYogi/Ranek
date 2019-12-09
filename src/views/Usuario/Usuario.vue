<template>
  <section class="usuario">
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
.pagina {
  min-height: calc(100vh - 125px);
}
</style>
