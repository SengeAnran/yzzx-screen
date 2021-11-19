export default {
  namespaced: true,
  state: {
    areaId: null,
    areaLevel: "province",
  },
  mutations: {
    setAreaId(state, value) {
      state.areaId = value;
    },
    setAreaLevel(state, value) {
      state.areaLevel = value;
    },
  },
  getters: {
    mapAreaId(state) {
      if (state.areaLevel === "city") {
        return Number(state.areaId) / 100;
      } else if (state.areaLevel === "province") {
        return null;
      } else {
        return Number(state.areaId);
      }
    },
  },
};
