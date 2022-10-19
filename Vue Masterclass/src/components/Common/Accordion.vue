<template>
  <div class="py-5 border-b border-solid border-brand-gray-1">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="toggleOpenState"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <FontAwesomeIcon :icon="['fas', getIcon]" class="mr-3" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Sorry, no {{ header.toLowerCase() }} data is available</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
    openIcon: {
      type: String,
      required: false,
      default: "angle-up",
    },
    closedIcon: {
      type: String,
      required: false,
      default: "angle-down",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    getIcon() {
      if (this.isOpen) {
        return this.openIcon;
      } else {
        return this.closedIcon;
      }
    },
  },
  methods: {
    toggleOpenState() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
