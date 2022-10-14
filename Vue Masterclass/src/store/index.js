import { createStore } from "vuex";
import storeActions from "@/data/storeActions";
import getJobs from "@/api/getJobs";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};

export const mutations = {
  [storeActions.user.login](state) {
    state.isLoggedIn = true;
  },
  [storeActions.jobs.set](state, jobs) {
    state.jobs = jobs;
  },
};

export const actions = {
  [storeActions.actions.fetchJobs]: async (context) => {
    const jobListing = await getJobs();
    context.commit(storeActions.jobs.set, jobListing);
  },
};

const store = createStore({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
