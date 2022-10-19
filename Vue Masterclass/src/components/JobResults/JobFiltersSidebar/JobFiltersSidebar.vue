<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="m-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear filters" type="secondary" class="rounded" />
        </div>
      </div>
      <JobFiltersSidebarOrganization />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Common/ActionButton";
import JobFiltersSidebarOrganization from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganization.vue";

export default {
  name: "JobFiltersSidebar",
  components: { ActionButton, JobFiltersSidebarOrganization },
};
</script>
