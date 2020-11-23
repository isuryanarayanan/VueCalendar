<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col cols="2">
          <v-sheet class="py-5" tile>
            <v-list-item two-line v-for="item in events" :key="item.id">
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  Identification {{ item.id }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-sheet>
        </v-col>
        <v-col><calendar /></v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import calendar from "./components/Calendar/calendarComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",

  components: {
    calendar,
  },
  computed: {
    ...mapGetters({
      events: "get_events",
    }),
  },

  data() {
    return {
      show: true,
    };
  },
  mounted() {},
};
</script>
