<template>
  <div>
    <nav-bar />
    <div class="margin">
      <v-card
        v-for="(playlist, index) in playlists"
        :key="index"
        class="mx-auto ma-12"
        width="800"
      >
        <v-img :src="playlist.img"></v-img>
        <v-card-title>
          {{ playlist.name }}
        </v-card-title>
        <v-card-subtitle>
          {{ playlist.difficulty }}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            class="amber darken-3--text text--accent-4"
            :to="`/playlists/quiz/${playlist._id}`"
            >quiz</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn icon @click="showSongs = !showSongs">
            <v-icon>{{
              showSongs ? 'mdi-chevron-up' : 'mdi-chevron-down'
            }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="showSongs">
            <v-divider></v-divider>

            <div v-for="(song, i) in playlist.songs" :key="i">
              <img :src="song.img" />
              <v-card-title>song.name</v-card-title>
              <v-card-subtitle>song.band</v-card-subtitle>
            </div>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import IPlaylist from '../../interfaces/playlist';

export default Vue.extend({
  async asyncData({ $axios }: any) {
    let playlists;
    try {
      playlists = await $axios
        .$get('http://localhost:8080/playlists')
        .then(({ playlists }: { playlists: IPlaylist[] }) => {
          return playlists;
        });
    } catch (error) {
      console.error(error);
      playlists = '';
    }
    return { playlists };
  },
  data() {
    return {
      showSongs: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.margin {
  margin-top: 80px;
}
</style>
