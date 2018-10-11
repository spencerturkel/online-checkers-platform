<template>
    <div>
    <google-sign-in v-if="signedOut" @signedIn="onSignedIn"></google-sign-in>
    <template v-else>
        <div class="center">Welcome, {{user}}!</div>
        <google-sign-out></google-sign-out>
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
    user: null as null | string,
  }),
  mounted() {
    gapi.load('auth2', () => {
      const auth = gapi.auth2.getAuthInstance();
      auth.isSignedIn.listen(signedIn => {
        if (!signedIn) {
          this.onSignedOut();
        }
      });
    });
  },
  methods: {
    onSignedIn(user: gapi.auth2.GoogleUser) {
      console.log('signed in');
      const profile = user.getBasicProfile();
      if (profile) {
        this.user = profile.getName();
        this.$emit('signedIn');
      }
    },
    async onSignedOut() {
      console.log('signed out');
      this.user = null;
      console.log('deleting auth');
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
