<template>
  <v-app>
    <v-main>
      <calendar />
    </v-main>
  </v-app>
</template>

<script>
import calendar from "./components/Calendar/calendarComponent.vue";
export default {
  name: "App",

  components: {
    calendar,
  },

  data() {
    return {
      show: true,
    };
  },
  mounted() {},
};
</script>
