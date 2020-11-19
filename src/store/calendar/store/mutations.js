export default {
  pushToEvents: function({ state }, event) {
    state.events.push(event);
  },
};
