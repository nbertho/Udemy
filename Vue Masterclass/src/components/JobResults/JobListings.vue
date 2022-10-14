<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage !== undefined"
            :to="{
              path: '/jobs/results',
              query: { page: previousPage },
            }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage !== undefined"
            :to="{
              path: '/jobs/results',
              query: { page: nextPage },
            }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import JobListing from "@/components/JobResults/JobListing";
import storeActions from "@/data/storeActions";

export default {
  name: "JobListings",
  components: { JobListing },
  data() {
    return {
      amountOfJobShowed: 10,
    };
  },
  computed: {
    currentPage() {
      return parseInt(this.$route.query.page) || 1;
    },
    previousPage() {
      let previousPage = this.currentPage - 1;
      return previousPage >= 1 ? previousPage : undefined;
    },
    nextPage() {
      let nextPage = this.currentPage + 1;
      const maxPage = this.$store.state.jobs.length / this.amountOfJobShowed;
      return nextPage <= maxPage ? nextPage : undefined;
    },
    displayedJobs() {
      let pageNumber = this.currentPage;
      let firstJobIndex = (pageNumber - 1) * this.amountOfJobShowed;
      let lastJobIndex = pageNumber * this.amountOfJobShowed;
      return this.$store.state.jobs.slice(firstJobIndex, lastJobIndex);
    },
  },
  async mounted() {
    this.$store.dispatch(storeActions.actions.fetchJobs);
  },
};
</script>
