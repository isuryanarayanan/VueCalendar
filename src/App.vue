<template>
  <v-app>
    <v-main>
      <Toolbar v-show="!show" />
      <Calendar v-show="show" />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "./components/toolbar.vue";
import Calendar from "./components/calendar.vue";

export default {
  name: "App",

  components: {
    Calendar,
    Toolbar,
  },

  data() {
    return {
      show: true,
    };
  },
  mounted() {},
};
</script>
