<template>
    <div>
    <google-sign-in v-if="signedOut"></google-sign-in>
    <template v-else>
        <div>Welcome, {{user}}!</div>
        <google-sign-out></google-sign-out>
    </template>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { listen } from './GoogleAuth';
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
    user: null as null | string,
  }),
  mounted() {
    gapi.load('auth2', () => {
      const auth = gapi.auth2.getAuthInstance();
      auth.isSignedIn.listen(signedIn => {
        if (!signedIn) {
          this.user = null;
          console.log('deleting auth');
          fetch('http://localhost:5000/auth', { method: 'delete' });
        }
      });
      auth.currentUser.listen(user => {
        const profile = user.getBasicProfile();
        if (profile) {
          this.user = profile.getName();
        }
      });
    });
  },
});
</script>
