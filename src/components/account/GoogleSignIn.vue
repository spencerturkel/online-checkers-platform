<template>
    <div :id="elementId"></div>
</template>

<script lang="ts">
import Vue from 'vue';

let id = 0;

export default Vue.extend({
  data: () => ({ uid: id++ }),
  computed: {
    elementId(): string {
      return 'google-signin-' + this.uid;
    },
  },
  beforeMount() {
    console.group('Waiting for gapi...');

    while (gapi == null) {
      console.log('Waiting...');
    }

    console.groupEnd();
  },
  mounted() {
    gapi.signin2.render(`google-signin-${this.uid}`, {
      onsuccess: (user: gapi.auth2.GoogleUser) => this.$emit('signIn', user),
    });
  },
});
</script>

<style scoped>
</style>
