<template>
    <div :id="elementId"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import { renderSignInButton } from './GoogleAuth';

let id = 0;

export default Vue.extend({
  data: () => ({ uid: id++ }),
  computed: {
    elementId(): string {
      return 'google-signin-' + this.uid;
    },
  },
  mounted() {
    gapi.signin2.render(this.elementId, {
      onfailure: () => this.$emit('signInFailed'),
      onsuccess: (user: gapi.auth2.GoogleUser) => this.signIn(user),
    });
  },
  methods: {
    async signIn(user: gapi.auth2.GoogleUser): Promise<void> {
      this.$emit('signInStarted');
      const token = user.getAuthResponse().id_token;

      console.log('google token', token);

      const authResult = await fetch('http://localhost:5000/auth/google', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (authResult.status !== 201) {
        this.$emit('signInFailed');
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

<style scoped>
</style>
