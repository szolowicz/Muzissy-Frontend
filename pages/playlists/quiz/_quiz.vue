<template>
  <div>
    <header>
      <h1>{{ slug.quiz }}</h1>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      slug: this.$route.params,
    };
  },
});
</script>
