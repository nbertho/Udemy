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
            <input
              :id="slugify(organization)"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="slugify(organization)">{{ organization }}</label>
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
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    getOrganizations() {
      return this.$store.getters.getOrganizationsList;
    },
  },
  methods: {
    selectOrganization() {},
    slugify(data) {
      return data
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    },
  },
};
</script>
