export default {
  get_global: function(state) {
    return state;
  },
  get_value: function(state) {
    return state.value;
  },
  get_events: function(state) {
    return state.events;
  },
  get_focus: function(state) {
    return state.focus;
  },
  get_type: function(state) {
    return state.type;
  },
  get_ready: function(state) {
    return state.ready;
  },
  get_typeToLabel: function(state) {
    return state.typeToLabel[state.type];
  },
  get_colors: function(state) {
    return state.colors;
  },
  get_names: function(state) {
    return state.names;
  },
  set_selectedEvent: function(state) {
    return state.selecedEvent;
  },
  set_selectedElement: function(state) {
    return state.selectedElement;
  },
  set_selectedOpen: function(state) {
    return state.selectedOpen;
  },
  set_dragEvent: function(state) {
    return state.dragEvent;
  },
  set_dragStart: function(state) {
    return state.dragStart;
  },
  set_createEvent: function(state) {
    return state.createEvent;
  },
  set_createStart: function(state) {
    return state.createStart;
  },
  set_extendOriginal: function(state) {
    return state.extendOriginal;
  },
};
