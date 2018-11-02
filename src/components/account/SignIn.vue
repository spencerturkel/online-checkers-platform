<template>
    <div>
    <template v-if="signedIn">
        <div class="center">Welcome, {{$user.name}}!</div>
        <google-sign-out></google-sign-out>
    </template>
    <google-sign-in v-else @signedIn="onSignedIn"></google-sign-in>
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
  data() {
    return {
      signedIn: this.$user != null,
    };
  },
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
    onSignedIn(user: gapi.auth2.GoogleUser): void {
      const profile = user.getBasicProfile();
      if (profile) {
        this.signedIn = true;
        this.$user = { isPremium: false, name: profile.getName() };
        this.$emit('signedIn');
      }
    },
    async onSignedOut(): Promise<void> {
      this.$user = null;
      this.signedIn = false;
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
