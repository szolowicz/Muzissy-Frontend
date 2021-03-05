<template>
  <div>
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
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import IPlaylist from '../interfaces/playlist';

export default Vue.extend({
  async asyncData() {
    const playlists = await this.$axios
      .$get('http://localhost:8080/playlists')
      .then(({ playlists }: { playlists: IPlaylist[] }) => {
        return playlists;
      });
    return { playlists };
  },
});
</script>
