<template>
  <div>
    <v-navigation-drawer v-model="drawer" app absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group active-class="secondary">
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
      <v-toolbar-title style="width: 200px">Muzissy</v-toolbar-title>
      <v-tabs align-with-title>
        <v-tab v-for="({ title, link }, i) in links" :key="i" :to="link">{{
          title
        }}</v-tab>
      </v-tabs>
      <v-text-field
        v-if="name !== '' && (!searchClosed || search)"
        v-model="search"
        :placeholder="`Search for ${name}`"
        style="width: 300px"
        prepend-inner-icon="mdi-magnify"
        class="expanding-search mt-5 mr-2"
        dense
        @blur="searchClosed = true"
        @focus="searchCLosed = false"
      ></v-text-field>
      <v-btn v-else icon @click="searchClosed = false">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-tooltip bottom>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
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
    components: {
      default: undefined,
      type: Array,
    },
  },
  data() {
    return {
      searchClosed: true,
      search: undefined,
      drawer: false,
      links: [
        {
          title: 'Playlists',
          link: '/playlists',
        },
        {
          title: 'Users',
          link: '/users',
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
  computed: {
    filteredComponents(): any {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!this.search)
        return this.$parent.$emit('filteredComponents', this.components);
      return this.$emit(
        'filteredComponents',
        this.components.filter((component: any) => {
          return component.name.match(this.search);
        })
      );
    },
  },
});
</script>
