<template>
  <div>
    <h1>Against {{otherName}}</h1>
    <h2>Vote who will go first</h2>
    <h3 v-if="winner">{{winner}} won the last game!</h3>
    <p v-if="otherDecisionDisplay">
      <span class="name">{{otherName}}</span>&nbsp;votes that
      <span class="choice">{{otherDecisionDisplay}}</span>&nbsp;will go first.
    </p>
    <b-btn-group>
      <b-btn
        variant="success"
        :pressed="myDecision === 'challenger'"
        @click="decide('challenger')"
      >You</b-btn>
      <b-btn
        variant="info"
        :pressed="myDecision === 'opponent'"
        @click="decide('opponent')"
      >{{otherName}}</b-btn>
      <b-btn variant="primary" :pressed="myDecision === 'random'" @click="decide('random')">Random</b-btn>
    </b-btn-group>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { DecidingState, Decision, Room } from './room-state';

export default Vue.extend({
  name: 'deciding-room',
  props: {
    room: {
      type: Object as () => Room & { state: DecidingState },
    },
    update: {
      type: Function,
    },
  },
  computed: {
    isChallenger(): boolean {
      return this.$user!.id === this.room.challenger.id;
    },
    myDecision(): string | null {
      return this.isChallenger
        ? this.room.state.challengerDecision
        : this.room.state.opponentDecision;
    },
    otherDecisionDisplay(): string | null {
      const decision = this.isChallenger
        ? this.room.state.opponentDecision
        : this.room.state.challengerDecision;
      return decision === 'challenger'
        ? 'you'
        : decision === 'opponent'
          ? 'they'
          : decision === 'random'
            ? 'a random player'
            : null;
    },
    otherName(): string {
      return this.isChallenger
        ? this.room.state.opponent.name
        : this.room.challenger.name;
    },
    winner(): string | null {
      return this.room.state.previousWinnerId === this.room.challenger.id
        ? this.room.challenger.name
        : this.room.state.previousWinnerId === this.room.state.opponent.id
          ? this.room.state.opponent.name
          : null;
    },
  },
  methods: {
    async decide(decision: Decision) {
      const response = await this.$http.post('/room/decision', { decision });

      if (response.isSuccess) {
        this.update();
      } else {
        // TODO: show error
        console.error(response);
      }
    },
  },
});
</script>
