import Vue from "vue";
import Vuex from "vuex";
import calendarStore from "./calendar/index.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { calendar: calendarStore },
});
