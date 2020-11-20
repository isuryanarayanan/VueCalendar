export default {
  get_events: function(state) {
    return state.events;
  },
  get_type: function(state) {
    return state.type;
  },
  get_typeToLabel: function(state) {
    return state.typeToLabel[state.type];
  },
};
