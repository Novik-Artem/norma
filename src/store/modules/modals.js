export default {
  state: {
    iconsModals: {
      comment: false,
      warning: false,
      info: false
    },
    isReload: false
  },
  mutations: {
    setIconsModals(state, { modal, value }) {
      state.iconsModals[modal] = value;
    },
    setIsReload(state, value) {
      state.isReload = value
    }
  },
};
