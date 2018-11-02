<template>
    <div :id="elementId"></div>
</template>

<script lang="ts">
import Vue from 'vue';

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

      try {
        await this.$http.post('/auth/google', { token });
        this.$root.$data.user = {
          isPremium: false,
          name: user.getBasicProfile().getName(),
          signOut: () => gapi.auth2.getAuthInstance().signOut(),
        };
        this.$emit('signedIn');
      } catch (e) {
        this.$emit('signInFailed');
        console.error('Error authenticating with google', e);
      }
    },
  },
});
</script>

<style scoped lang="css">
div {
  /*This harddcodes the button to the center of the screen at
   the top quarter of the screen*/
  position: absolute;
  width: 100%;
  top: 25%;
  left: 48%;
}
</style>
