<template>
    <div>
        <h1>Against {{opponentName}}</h1>
        <h2>Vote who will go first</h2>
        <p v-if="opponentChoice">
            <span class="name">{{opponentName}}</span>votes that
            <span class="choice">{{opponentChoice}}</span>will go first.
        </p>
        <b-btn-group>
            <b-btn
                variant="success"
                :pressed="state.challengerDecision === 'challenger'"
                @click="decide('challenger')"
            >You</b-btn>
            <b-btn
                variant="info"
                :pressed="state.challengerDecision === 'opponent'"
                @click="decide('opponent')"
            >{{opponentName}}</b-btn>
            <b-btn
                variant="primary"
                :pressed="state.challengerDecision === 'random'"
                @click="decide('random')"
            >Random</b-btn>
        </b-btn-group>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { DecidingState, Decision } from './room-state';

export default Vue.extend({
  name: 'deciding-room',
  props: {
    state: {
      type: Object as () => DecidingState,
    },
    update: {
      type: Function,
    },
  },
  computed: {
    opponentChoice(): string {
      return this.state.opponentDecision === 'challenger'
        ? 'you'
        : this.state.opponentDecision === 'opponent'
          ? 'they'
          : 'a random player';
    },
    opponentName(): string {
      return this.state.opponent.name;
    },
  },
  methods: {
    async decide(decision: Decision) {
      const response = await this.$http.post('/room/decide', { decision });

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
