export default () => ({
  refs: null,
  events: [
    {
      id: 0,
      name: "hardcoded event - 1",
      details: "",
      color: "red",
      end: 1605546500000,
      start: 1605538800000,
      timed: true,
    },
  ],
  value: "",
  type: "week",
  focus: "",
  ready: false,
  typeToLabel: {
    month: "Month",
    week: "Week",
    day: "Day",
    "4day": "4 Days",
  },
  colors: ["#2196F3", "#3F51B5", "#673AB7", "#4CAF50", "#FF9800", "#757575"],
  names: [
    "Meeting",
    "Holiday",
    "PTO",
    "Travel",
    "Event",
    "Birthday",
    "Conference",
    "Party",
  ],
  selectedEvent: {},
  selectedElement: null,
  selectedOpen: false,
  dragEvent: null,
  dragStart: null,
  dragTime: null,
  createEvent: null,
  createStart: null,
  extendOriginal: null,
});
