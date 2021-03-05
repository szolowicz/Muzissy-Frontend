<template>
  <div>
    <v-navigation-drawer v-model="drawer" app absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="amber darken-3--text text--accent-4"
        >
          <v-list-item v-for="({ title }, i) in links" :key="i">
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      ref="appBar"
      app
      :color="$vuetify.theme.dark ? null : 'white'"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>Muzissy</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-tooltip bottom>
        <template #activator="{ on }">
          <v-btn icon @click="changeTheme" v-on="on">
            <v-icon>mdi-brightness-6</v-icon>
          </v-btn>
        </template>

        <span>Change Theme</span>
      </v-tooltip> -->
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      drawer: false,
      group: 0,
      links: [
        {
          title: 'Playlists',
          link: '/playlists',
        },
      ],
    };
  },
});
</script>
