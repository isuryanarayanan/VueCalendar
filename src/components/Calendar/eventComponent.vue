<template>
  <v-card color="grey lighten-4" min-width="350px" max-width="500px" flat>
    <v-toolbar :color="selectedEvent.color" dark>
      <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="deleteEvent(selectedEvent.id)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <span>
        {{ selectedEvent.details }}
      </span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="secondary"
        @click="$store.commit('set_selectedOpen', false)"
      >
        Cancel
      </v-btn>
      <v-btn text color="secondary" @click="edit">
        EDIT
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
    edit() {
      // this.$store.commit("set_seletedEvent",{this.sel})
      console.log(this.selectedEvent);
    },
  },
};
</script>
