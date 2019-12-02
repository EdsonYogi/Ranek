<template>
  <div id="app">
    <TheHeader />
    <div id="main">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
@import url("../node_modules/bootstrap/dist/css/bootstrap.css");
@import url("../node_modules/bootstrap-vue/dist/bootstrap-vue.css");

body {
  background-image: url("../src/assets/pattern.svg");
}

.btn-ranek {
  background-color: #87f;
  color: white;
}
</style>
