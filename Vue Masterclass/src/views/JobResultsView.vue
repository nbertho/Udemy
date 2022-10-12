<template>
  <div>
    <h1 class="text-6xl font-bold">Job result view</h1>
    <button @click="goToHome">Go to home page</button>
  </div>
</template>

<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>
