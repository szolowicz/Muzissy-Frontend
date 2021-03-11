<template>
  <v-container>
    <v-row>
      <v-col style="height: 10vh" class="d-flex justify-space-between">
        <h1>Some playlist</h1>
        <v-btn to="/playlists"><v-icon>mdi-keyboard-backspace</v-icon></v-btn>
      </v-col>
    </v-row>
    <v-row style="height: 40vh" class="d-flex align-center">
      <v-col class="d-flex justify-center">
        <p class="display-1">Are burgers fit?</p>
      </v-col>
    </v-row>
    <v-row style="height: 22vh">
      <v-col v-for="(answer, index) in answers" :key="index">
        <v-btn block class="secondary" style="height: 100%">{{ answer }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      answers: ['yes', 'no', 'idk', 'maybe'],
    };
  },
});
</script>
