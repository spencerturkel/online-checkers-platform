<template>
  <div>
    <template v-if="$user">
      <h1>Welcome, {{$user.name}}!</h1>
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
          <google-sign-in></google-sign-in>
        </b-col>
      </b-row>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { AuthenticatedUser } from '../user';
import DevSignIn from './DevSignIn.vue';
import GoogleSignIn from './GoogleSignIn.vue';
import Upgrade from './Upgrade.vue';

export default Vue.extend({
  components: {
    DevSignIn,
    GoogleSignIn,
    Upgrade,
  },
  methods: {
    async onSignedOut(): Promise<void> {
      if (this.$user && (this.$user as AuthenticatedUser).socialSignOut) {
        await (this.$user as AuthenticatedUser).socialSignOut();
      }

      const response = await this.$http.delete('/auth');

      if (response.isError) {
        // TODO: show error
        console.error(response);
        return;
      }

      this.$user = null;
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
