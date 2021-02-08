<template>
  <v-card width="500" class="mx-auto mt-5">
    <v-card-title class="pb-0">
      <h1>Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="nicknameOrEmail"
          label="Nickname/e-mail"
          prepend-icon="mdi-account-circle"
          :rules="nicknameOrEmailRules"
          required
        />

        <v-text-field
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          required
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="info">Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      valid: false,
      showPassword: false,
      nicknameOrEmail: '',
      password: '',
      nicknameOrEmailRules: [
        (v: string) => !!v || 'Nickname/e-mail is required.',
      ],
      passwordRules: [
        (v: string) => !!v || 'Password is required.',
        (v: string) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*@^])(?=.{8,})/.test(v) ||
          'At least 8 characters with one uppercase letter, number and special character.',
      ],
    };
  },
});
</script>
