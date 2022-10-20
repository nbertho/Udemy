<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import constants from "@/data/constants";

export default {
  name: "Spotlight",
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    const response = await axios.get(`${constants.api.url}/spotlights`);
    this.spotlights = response.data;
  },
};
</script>
