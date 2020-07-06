import Vuex from "quickapp-vuex";

export default new Vuex.Store({
  state: {
    url: ''
  },
  getters: {
    url(state) {
      return state.url;
    }
  },
  mutations: {
    setFrameUrl(state, url) {
    debugger
      state.url = url;
    }
  }
});