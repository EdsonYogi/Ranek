<template>
  <div class="loading mx-auto">
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>

<style scoped>
.loading .spinner-grow {
  background-color: #87f;
  animation: spinner-grow 1.5s linear infinite;
}

.loading div:nth-child(1) {
  animation-delay: 0.1s;
}

.loading div:nth-child(2) {
  animation-delay: 0.2s;
}

.loading div:nth-child(3) {
  animation-delay: 0.3s;
}

.loading div:nth-child(4) {
  animation-delay: 0.4s;
}

.loading div:nth-child(5) {
  animation-delay: 0.5s;
}
</style>