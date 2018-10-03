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

      console.log('google token', token);

      try {
        await this.$http.post('/auth/google', { token });
      } catch (e) {
        this.$emit('signInFailed');
        console.error('Error authenticating with google', e);
      }
    },
  },
});
</script>

<style scoped>
</style>
