
export default {
  state: {
    seconds: 0,
    timer: null
  },
  mutations: {
    startTimer(state) {
      state.timer = setInterval(() => {
        state.seconds++;
      }, 1000);

    },
    stopTimer(state) {
      clearInterval(state.timer);
      state.timer = null;
    }
  }
};