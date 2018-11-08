<template>
  <div>
    <h1>Waiting Room</h1>
    <template v-if="state.invitationToken">
      <p>Your invitation was sent an email with an invitation link.</p>
      <b-button variant="danger" @click="uninvite">Uninvite</b-button>
      <p>Your opponent may also join using the following link:</p>
      <p>
        <a :href="invitationLink" v-text="invitationLink"></a>
      </p>
    </template>
    <template v-else>
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
      <b-form ref="form" inline novalidate :validated="validated" @submit="invite">
        <b-form-input placeholder="example@gmail.com" type="email" required v-model="email"></b-form-input>
        <b-button type="submit" variant="primary" class="mx-2">Invite</b-button>
      </b-form>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { WaitingState } from './room-state';

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
      return `${window.location.origin}/join/${this.state.invitationToken}`;
    },
    public_(): boolean {
      return this.state.public;
    },
  },
  data: () => ({
    email: '',
    validated: false,
  }),
  methods: {
    async invite() {
      console.log('invite');
      if (!(this.$refs.form as HTMLFormElement).checkValidity()) {
        this.validated = true;
        console.log('invite invalid');
        return;
      }

      const invitationResponse = await this.$http.post('/room/invite', {
        email: this.email,
      });
      console.log('invite posted');
      if (invitationResponse.isError) {
        console.error(invitationResponse);
      }
      this.update();
    },
    async publish() {
      await this.$http.post('/room/publish');
      this.update();
    },
    async privatize() {
      await this.$http.post('/room/privatize');
      this.update();
    },
    async uninvite() {
      await this.$http.delete('/room/invite');
    },
  },
});
</script>
