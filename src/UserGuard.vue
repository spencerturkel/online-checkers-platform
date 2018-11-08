<template>
    <component v-if="$user" :is="component"></component>
    <sign-in v-else></sign-in>
</template>

<script lang="ts">
import Vue from 'vue';

import SignIn from './user-account/SignIn.vue';

export default Vue.extend({
  name: 'UserGuard',
  props: {
    component: Function,
  },
  components: {
    SignIn,
  },
  async created() {
    if (!this.$user) {
      const response = await this.$http.get('/user');
      if (response.isSuccess && response.data) {
        const { id, name } = response.data;
        this.$user = { id, name };
      }
    }
  },
});
</script>
