<template>
    <button @click="signOut">Sign Out</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    signOut() {
      gapi.auth2.getAuthInstance().signOut();
    },
  },
});
</script>
