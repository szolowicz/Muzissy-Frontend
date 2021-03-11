<template>
  <div>
    <header>
      <h1>{{ res.name }}</h1>
    </header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  async asyncData({ $axios, params }: any) {
    let res;
    try {
      res = await $axios
        .$get(`http://localhost:8080/quiz/questions/${params?.quiz}`)
        .then((res: object) => {
          console.log(res);
          return res;
        });
    } catch (error) {
      console.error(error);
      res = '';
    }
    return { res };
  },
});
</script>
