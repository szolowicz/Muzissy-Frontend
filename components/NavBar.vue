<template>
  <div>
    <v-navigation-drawer v-model="drawer" app absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="secondary">
          <v-list-item v-for="({ title }, i) in linksUser" :key="i">
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      ref="appBar"
      dense
      :color="$vuetify.theme.dark ? null : 'white'"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"
        ><v-icon>mdi-account</v-icon></v-app-bar-nav-icon
      >
      <v-toolbar-title style="width: 130px">Muzissy</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs v-for="({ title, link }, i) in links" :key="i" align-with-title>
        <v-tab :to="link">{{ title }}</v-tab>
      </v-tabs>
      <v-tooltip v-if="name != ''" bottom>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <span>Search for {{ name }}</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template #activator="{ on }">
          <v-btn icon @click="changeTheme" v-on="on">
            <v-icon>mdi-brightness-6</v-icon>
          </v-btn>
        </template>

        <span>Change Theme</span>
      </v-tooltip>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      default: '',
      type: String,
    },
  },
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
      linksUser: [
        {
          title: 'Settings',
          link: '/settings',
        },
      ],
    };
  },
});
</script>
