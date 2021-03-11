<template>
  <v-container>
    <v-row>
      <v-col style="height: 10vh" class="d-flex justify-space-between">
        <h1>{{ name }}</h1>
        <v-btn to="/playlists"><v-icon>mdi-keyboard-backspace</v-icon></v-btn>
      </v-col>
    </v-row>
    <v-row style="height: 40vh" class="d-flex align-center">
      <v-col class="d-flex justify-center">
        <p class="display-1">What song is it?</p>
      </v-col>
    </v-row>
    <v-row style="height: 22vh">
      <v-col v-for="(song, index) in songs" :key="index">
        <v-btn block class="secondary" style="height: 100%">{{
          song.name
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
    },
    songs: {
      type: Array,
      required: true,
    },
  },
});
</script>
