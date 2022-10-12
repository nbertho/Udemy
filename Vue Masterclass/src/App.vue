<template>
  <div>
    <MainNav />
    <Hero />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav";
import Hero from "@/components/JobSearch/Hero";

export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>
