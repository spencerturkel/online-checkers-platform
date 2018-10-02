<template>
    <div>
    <google-sign-in v-if="signedOut" @signIn="signIn"></google-sign-in>
    <template v-else>
        <div>Welcome, {{user.name}}!</div>
        <google-sign-out @signOut="signOut"></google-sign-out>
    </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import GoogleSignIn from './GoogleSignIn.vue';
import GoogleSignOut from './GoogleSignOut.vue';

export default Vue.extend({
  components: {
    GoogleSignIn,
    GoogleSignOut,
  },
  computed: {
    signedOut(): boolean {
      return this.user == null;
    },
  },
  data: () => ({
    user: null as null | { name: string },
  }),
  methods: {
    signOut() {
      this.user = null;
    },
    signIn(user: gapi.auth2.GoogleUser): void {
      this.user = { name: user.getBasicProfile().getName() };
    },
  },
});
</script>
