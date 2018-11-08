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
});
</script>
