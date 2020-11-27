<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col><calendar /></v-col>
      </v-row>
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
};
</script>
