<template>
  <div :id="elementId"></div>
</template>

<script lang="ts">
import Vue from 'vue';

let nextUid = 0;

/**
 * Google Sign-In using the gapi.signin2 API.
 */
export default Vue.extend({
  name: 'GoogleSignIn',
  data: () => ({ uid: nextUid++ }),
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
      const token = user.getAuthResponse().id_token;

      const { isError: googleError } = await this.$http.post(
        '/auth/google',
        { token },
        { validateStatus: status => status >= 200 && status < 300 },
      );

      if (googleError) {
        // TODO: show an error to the user
        console.error('error authenticating with google');
        return;
      }

      const { data: userData, isError: dataError } = await this.$http.get(
        '/user',
      );

      if (dataError) {
        // TODO: show an error to the user
        console.error('error retrieving user data');
        return;
      }

      const { userId: id, isPremium, name } = userData;

      this.$user = {
        id,
        isPremium,
        name,
        socialSignOut: async () => {
          gapi.auth2.getAuthInstance().signOut();
        },
      };
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
