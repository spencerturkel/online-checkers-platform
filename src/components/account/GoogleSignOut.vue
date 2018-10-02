<template>
    <button @click="signOut">Sign Out</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    async signOut() {
      await gapi.auth2.getAuthInstance().signOut();
      this.$emit('signOut');
    },
  },
});
</script>
