<template>
  <Accordion header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="Org 1" type="checkbox" class="mr-3" />
            <label for="Org 1">Org 1</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Org 2" type="checkbox" class="mr-3" />
            <label for="Org 2">Org 2</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Org 3" type="checkbox" class="mr-3" />
            <label for="Org 3">Org 3</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Org 4" type="checkbox" class="mr-3" />
            <label for="Org 4">Org 4</label>
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
};
</script>
