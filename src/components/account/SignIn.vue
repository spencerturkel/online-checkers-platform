<template>
    <div>
    <template v-if="$root.$data.user">
        <div class="center">Welcome, {{$root.$data.user.name}}!</div>
        <b-button @click="onSignedOut">Sign Out</b-button>
    </template>
    <google-sign-in v-else @signedIn="onSignedIn"></google-sign-in>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GoogleSignIn from './GoogleSignIn.vue';

export default Vue.extend({
  components: {
    GoogleSignIn,
  },
  methods: {
    onSignedIn(name: string): void {
      this.$emit('signedIn');
    },
    async onSignedOut(): Promise<void> {
      console.log('signed out');
      await this.$root.$data.user.signOut();
      this.$root.$data.user = null;
      try {
        await this.$http.delete('/auth');
      } catch (e) {
        console.error('Error deleting auth', e);
      }
      this.$emit('signedOut');
    },
  },
});
</script>

<style scoped lang="css">
div.center {
  position: absolute;
  top: 25%;
  width: 100%;
  text-align: center;
}
</style>
"
