<template>
  <header class="w-full text-sm">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center h-full text-xl">
          {{ company }}
        </a>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.name"
              class="h-full ml-9 first:ml-0"
            >
              <a :href="menuItem.link" class="flex items-center h-full py-2.5">
                {{ menuItem.name }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else text="Sign in" @click="loginUser" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton";
import ProfileImage from "@/components/ProfileImage";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: "My careers",
      url: "https://careers.google.com",
      menuItems: [
        { name: "Teams", link: "#" },
        { name: "Locations", link: "#" },
        { name: "Life at Company", link: "#" },
        { name: "How we hire", link: "#" },
        { name: "Students", link: "#" },
        { name: "Jobs", link: "#" },
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
