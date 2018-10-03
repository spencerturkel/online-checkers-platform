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
    user: null as null | { name: string; token: string },
  }),
  methods: {
    signOut() {
      this.user = null;
    },
    async signIn(user: gapi.auth2.GoogleUser): Promise<void> {
      const token = user.getAuthResponse().id_token;

      console.log('token', token);

      const authResult = await fetch('http://localhost:5000/auth/google', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (authResult.status === 201) {
        this.user = {
          name: user.getBasicProfile().getName(),
          token,
        };
      } else {
        // TODO: log out of google
        console.error(
          'Error authenticating with google',
          authResult,
          await authResult.text(),
        );
      }
    },
  },
});
</script>
