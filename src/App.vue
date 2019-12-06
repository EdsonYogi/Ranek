<template>
  <div id="app">
    <TheHeader />
    <div id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
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

a,
a:hover {
  color: black;
  text-decoration: none;
}

.btn-ranek {
  background-color: #87f;
  border: 3px solid #87f;
  color: white;
}

.btn-ranek:hover {
  background-color: transparent;
  color: #87f;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.75s;
}
</style>
