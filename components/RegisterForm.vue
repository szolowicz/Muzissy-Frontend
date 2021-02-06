<template>
  <v-card width="500" class="mx-auto mt-5">
    <v-card-title class="pb-0">
      <h1>Register</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="nickname"
          label="Nickname"
          prepend-icon="mdi-account-circle"
          :rules="nicknameRules"
          required
        />

        <v-text-field
          v-model="email"
          label="E-mail"
          prepend-icon="mdi-account-circle"
          :rules="emailRules"
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

        <v-text-field
          v-model="repeatPassword"
          :type="showPassword ? 'text' : 'password'"
          label="Repeat password"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="repeatPasswordRules"
          required
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="info">Register</v-btn>
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
      nickname: '',
      email: '',
      password: '',
      repeatPassword: '',
      nicknameRules: [(v: string) => !!v || 'Nickname is required.'],
      emailRules: [
        (v: string) => !!v || 'E-mail is required.',
        (v: string) =>
          /^\S+@\S+\.\S+$/.test(v) ||
          'E-mail must be correct. Example: smith@gmail.com.',
      ],
      passwordRules: [
        (v: string) => !!v || 'Password is required.',
        (v: string) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&*@^])(?=.{8,})/.test(v) ||
          'At least 8 characters with one uppercase letter, number and special character.',
      ],
      repeatPasswordRules: [
        (v: string) => v === (this as any).password || 'Password must match.',
      ],
    };
  },
});
</script>
