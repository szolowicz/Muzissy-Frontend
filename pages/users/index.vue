<template>
  <div>
    <nav-bar name="Users" :components="users" />
    <div class="margin">
      <v-card
        v-for="(user, index) in users"
        :key="index"
        class="mx-auto ma-12"
        width="800"
      >
        <v-list-item two-line>
          <v-list-item-avatar tile size="80">
            <v-img v-if="user.img" :src="user.img"></v-img>
            <v-icon v-else size="90">mdi-account</v-icon>
          </v-list-item-avatar>
          <v-list-item-title class="headline mb-1">
            {{ user.name }}
          </v-list-item-title>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import IUser from '../../interfaces/user';

export default Vue.extend({
  async asyncData({ $axios }: any) {
    let users;
    try {
      users = await $axios
        .$get('http://localhost:8080/users')
        .then(({ users }: { users: IUser[] }) => {
          return users;
        });
    } catch (error) {
      console.error(error);
      users = '';
    }
    return { users };
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
