<template>
  <div>
    <template v-if="!$root.$data.user.isGuest">
      <h1>Welcome, {{$root.$data.user.name}}!</h1>
      <b-container>
        <b-row>
          <b-col>
            <b-button @click="onSignedOut">Sign Out</b-button>
          </b-col>
        </b-row>
      </b-container>
    </template>
    <template v-else>
      <b-row>
        <b-col>
          <dev-sign-in v-if="!$production"></dev-sign-in>
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col>
          <!-- <google-sign-in></google-sign-in> -->
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DevSignIn from './DevSignIn.vue';
import GoogleSignIn from './GoogleSignIn.vue';

export default Vue.extend({
  components: {
    DevSignIn,
    GoogleSignIn,
  },
  methods: {
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
  width: 100%;
  text-align: center;
}
</style>
