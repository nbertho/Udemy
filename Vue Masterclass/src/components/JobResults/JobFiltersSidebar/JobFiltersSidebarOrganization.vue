<template>
  <Accordion header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in getOrganizations"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input :id="organization" type="checkbox" class="mr-3" />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import Accordion from "@/components/Common/Accordion";

export default {
  name: "JobFiltersSidebarOrganization",
  components: { Accordion },
  computed: {
    getOrganizations() {
      return this.$store.getters.getOrganizationsList;
    },
  },
};
</script>
