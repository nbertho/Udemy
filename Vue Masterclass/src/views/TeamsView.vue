<template>
  <h1>COucxou</h1>
  <HeaderContainer>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">Join Us</h2>
    </template>
  </HeaderContainer>
</template>

<script>
import HeaderContainer from "@/components/Common/HeaderContainer";
export default {
  name: "TeamsView",
  components: { HeaderContainer },
};
</script>
