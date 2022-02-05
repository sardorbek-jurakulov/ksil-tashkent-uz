<template>
  <div>
    <h2>Products</h2>
  </div>
</template>

<script>
export default {
  computed: {
    getProducts() {
      return this.$store.dispatch();
    }
  }
}
</script>

<style></style>