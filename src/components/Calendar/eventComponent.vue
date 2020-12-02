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
        <v-container>
          <v-layout row wrap>
            <v-flex>
              <v-text-field
                v-model="pseudo_selectedEvent.details"
                label=""
                clearable
              >
                <template v-slot:append>
                  <v-fade-transition leave-absolute>
                    <v-progress-circular
                      v-if="loading"
                      size="24"
                      :color="selectedEvent.color"
                      indeterminate
                    ></v-progress-circular>
                  </v-fade-transition> </template
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
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
      <v-btn text :color="selectedEvent.color" @click="save">
        save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      pseudo_selectedEvent: {},
    };
  },
  computed: {
    ...mapGetters({
      selectedEvent: "get_selectedEvent",
      selectedElement: "get_selectedElement",
      selectedOpen: "get_selectedOpen",
    }),
    selectedOpen: {
      get() {
        return this.$store.getters["get_selectedOpen"];
      },
      set(event) {
        this.$store.commit("set_selectedOpen", event);
      },
    },
  },
  mounted() {
    this.pseudo_selectedEvent = this.selectedEvent;
  },
  methods: {
    deleteEvent(event) {
      this.$store.commit("deleteFromEvents", event);
      this.$store.commit("set_selectedOpen", false);
    },
    save() {
      // this.$store.commit("set_seletedEvent",{this.sel})
      console.log(this.pseudo_selectedEvent);
    },
  },
};
</script>
