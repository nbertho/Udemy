<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter text-8xl mb-14">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job</h2>
  </section>
</template>

<script>
import getNextElementInList from "@/utils/getNextElementInList";
import constants from "@/data/constants";
export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return this.action.toLowerCase();
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        this.action = getNextElementInList(
          constants.headline.actions,
          this.action
        );
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
