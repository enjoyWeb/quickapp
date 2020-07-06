import Vuex from "quickapp-vuex";

export default new Vuex.Store({
  state: {
    url: '',
    cleanActive: false,
    storyActive: false
  },
  getters: {
    url(state) {
      return state.url;
    },
    cleanActive(state) {
      return state.cleanActive;
    },
    storyActive(state) {
      return state.storyActive;
    }
  },
  mutations: {
    setFrameUrl(state, url) {
      state.url = url;
    },
    toggleClean(state, data) {
      state.cleanActive = !state.cleanActive;
    },
    toggleStory(state, data) {
      state.storyActive = !state.storyActive;
    }
  }
});