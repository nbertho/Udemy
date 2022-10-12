<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://www.w3schools.com/howto/img_avatar.png",
    };
  },
};
</script>
