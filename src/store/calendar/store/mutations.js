export default {
  pushToEvents: function(state, event) {
    state.events.push(event);
  },
  set_today: function(state) {
    state.focus = "";
  },
  set_type: function(state, type) {
    state.type = type;
  },
};
