<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <router-link
          :to="{ name: 'home' }"
          class="flex items-center h-full text-xl"
        >
          My careers
        </router-link>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.name"
              class="h-full ml-9 first:ml-0"
            >
              <router-link
                :to="menuItem.route"
                class="flex items-center h-full py-2.5"
              >
                {{ menuItem.name }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else text="Sign in" @click="loginUser" />
        </div>
      </div>
      <SubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import nav from "@/data/nav";
import storeActions from "@/data/storeActions";
import ActionButton from "@/components/Common/ActionButton";
import ProfileImage from "@/components/Navigation/ProfileImage";
import SubNav from "@/components/Navigation/SubNav";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      menuItems: nav.links,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    loginUser() {
      this.$store.commit(storeActions.user.login);
    },
  },
};
</script>
