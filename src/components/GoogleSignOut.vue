<template>
    <button @click="signOut">Sign Out</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    async signOut() {
      try {
        await (gapi.auth2.getAuthInstance() as gapi.auth2.GoogleAuth).signOut();
        console.log('signed out');
      } catch (e) {
        console.error('error signing out', e);
      }
    },
  },
});
</script>

<style scoped>
</style>
