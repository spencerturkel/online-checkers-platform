<template>
  <div>
    <h1 class="center">Waiting Room</h1>
    <div v-if="state.invitationToken">
      <p v-if="emailed">Your invitation was sent an email with an invitation link.</p>
      <p>
        Your opponent may
        join using the following link:
      </p>
      <p>
        <a :href="invitationLink" v-text="invitationLink"></a>
      </p>
      <b-button @click="regenerate">{{emailed ? 'Uninvite' : 'Regenerate Link'}}</b-button>
    </div>
    <p v-if="state.public">
      Your room is
      <strong>public</strong>, and anyone may join.
    </p>
    <p v-else>
      Your room is
      <strong>private</strong>, and you must invite someone to join.
    </p>
    <b-button v-if="public_" variant="success" class="my-2" @click="privatize">Privatize</b-button>
    <b-button v-else variant="success" class="my-2" @click="publish">Publish</b-button>
    <b-form v-if="!emailed" ref="form" inline novalidate :validated="validated" @submit="invite">
      <b-form-input placeholder="example@gmail.com" type="email" required v-model="email"></b-form-input>
      <b-button type="submit" variant="primary" class="mx-2">Invite by email</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { WaitingState } from './room-state';

/**
 * Shows the invitation link, allows the user to email the invitation,
 * and allows the user to publish/privatize the room.
 */
export default Vue.extend({
  name: 'waiting-room',
  props: {
    state: {
      type: Object as () => WaitingState,
    },
    update: {
      type: Function,
    },
  },
  computed: {
    invitationLink(): string {
      return `${window.location.origin}/#/join/${this.state.invitationToken}`;
    },
    public_(): boolean {
      return this.state.public;
    },
  },
  data: () => ({
    email: '',
    emailed: false,
    validated: false,
  }),
  methods: {
    async invite() {
      if (!(this.$refs.form as HTMLFormElement).checkValidity()) {
        this.validated = true;
        console.log('invite invalid');
        return;
      }

      const invitationResponse = await this.$http.post('/room/invite', {
        email: this.email,
      });

      if (invitationResponse.isError) {
        console.error(invitationResponse);
      }

      this.emailed = true;
    },
    async regenerate() {
      this.emailed = false;
      await this.$http.post('/room/invite');
    },
    async publish() {
      await this.$http.post('/room/publish');
      this.update();
    },
    async privatize() {
      await this.$http.post('/room/privatize');
      this.update();
    },
  },
});
</script>
