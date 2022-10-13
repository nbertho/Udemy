<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar";
import JobListings from "@/components/JobResults/JobListings";
export default {
  name: "JobResultsView",
  components: { JobFiltersSidebar, JobListings },
};
</script>
