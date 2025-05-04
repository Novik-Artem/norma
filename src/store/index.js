import { createStore } from "vuex";
import timer from "./modules/timer";
import modals from "./modules/modals";

export default createStore({
  modules: {
    timer,
    modals
  },
});
