<template>
  <div class="home">
    <div class="calendar" v-if="showRaw">
      <raw-calendar />
    </div>
    <div class="calendar" v-else>
      <Calendar />
    </div>
  </div>
</template>

<script>
import Calendar from "../components/calendar.vue";
import rawCalendar from "../components/rawCalendar.vue";
export default {
  name: "Home",
  components: { Calendar, rawCalendar },
  data() {
    return {
      showRaw: true
    };
  }
};
</script>
