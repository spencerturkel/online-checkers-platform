<template>
    <div :id="`google-signin-${uid}`"></div>
</template>

<script lang="ts">
import Vue from 'vue';

let id = 0;

export default Vue.extend({
  data: () => ({ uid: id++ }),
  mounted() {
    gapi.signin2.render(`google-signin-${this.uid}`, {
      onfailure: () => this.$emit('failure'),
      onsuccess: (user: gapi.auth2.GoogleUser) => this.$emit('success'),
    });
  },
});
</script>

<style scoped>
</style>
