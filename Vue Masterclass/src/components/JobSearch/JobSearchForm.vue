<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="handleJobSearchForm"
  >
    <FontAwesomeIcon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-10">Role</label>
        <TextInput v-model="role" placeholder="Software engineer" />
      </div>
      <span
        class="flex items-center h-full px-3 border-x border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-0 -top-10">Where?</label>
        <TextInput v-model="location" placeholder="Los Angeles" />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/Common/ActionButton";
import TextInput from "@/components/Common/TextInput";

export default {
  name: "JobSearchForm",
  components: { ActionButton, TextInput },
  data() {
    return {
      role: "",
      location: "",
    };
  },
  methods: {
    updateRole(payload) {
      this.role = payload;
    },
    updateLocation(payload) {
      this.location = payload;
    },
    handleJobSearchForm() {
      this.$router.push({
        name: "job-results",
        query: {
          role: this.role,
          location: this.location,
        },
      });
    },
  },
};
</script>
