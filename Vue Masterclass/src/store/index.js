import { createStore } from "vuex";
import storeActions from "@/data/storeActions";

export const state = () => {
  return {
    isLoggedIn: false,
  };
};

export const mutations = {
  [storeActions.user.login](state) {
    state.isLoggedIn = true;
  },
};

const store = createStore({
  state,
  mutations,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
