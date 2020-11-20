export default () => ({
  events: [
    {
      id: 0,
      name: "hardcoded event - 1",
      color: "red",
      start: new Date("2020-11-19T16:00:00"),
      end: new Date("2020-11-19T20:00:00"),
      timed: true,
    },
  ],
  type: "week",
  focus: "",
  ready: false,
  typeToLabel: {
    month: "Month",
    week: "Week",
    day: "Day",
    "4day": "4 Days",
  },
  colors: [
    "#2196F3",
    "#3F51B5",
    "#673AB7",
    "#00BCD4",
    "#4CAF50",
    "#FF9800",
    "#757575",
  ],
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
  createEvent: null,
  createStart: null,
  extendOriginal: null,
});