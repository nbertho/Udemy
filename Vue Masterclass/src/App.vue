<template>
  <div>
    <MainNav />
    <Hero />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav";
import Hero from "@/components/Hero";

export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>
