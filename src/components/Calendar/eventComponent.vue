<template>
  <v-card color="grey lighten-4" min-width="350px" flat>
    <v-toolbar :color="selectedEvent.color" dark>
      <v-btn icon>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="deleteEvent(selectedEvent.id)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <span v-html="selectedEvent.details"></span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="secondary"
        @click="$store.commit('set_selectedOpen', false)"
      >
        Cancel
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      selectedEvent: "get_selectedEvent",
      selectedElement: "get_selectedElement",
      selectedOpen: "get_selectedOpen",
    }),
  },
  mounted() {},
  methods: {
    deleteEvent(event) {
      this.$store.commit("deleteFromEvents", event);
      this.$store.commit("set_selectedOpen", false);
    },
  },
};
</script>
