<template>
  <b-container>
    <h1>Room</h1>
    <b-btn variant="danger" @click="leave">Leave</b-btn>
    <template v-if="state">
      <waiting-room v-if="state.name === 'waiting'" :state="state" :update="updateRoom"></waiting-room>
    </template>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';

import WaitingRoom from './WaitingRoom.vue';

export interface RoomState {
  name: string;
}

export default Vue.extend({
  name: 'Room',
  components: {
    WaitingRoom,
  },
  data: () =>
    ({ heartbeat: null, state: null } as {
      heartbeat: NodeJS.Timer | null;
      state: RoomState | null;
    }),
  destroyed() {
    clearInterval(this.heartbeat!);
  },
  async created() {
    this.heartbeat = setInterval(() => this.updateRoom(), 500);
    await this.updateRoom();
  },
  methods: {
    async leave() {
      await this.$http.post('/room/leave');
      this.$router.push('/');
    },
    async updateRoom() {
      let response = await this.$http.get('/room');

      if (response.status === 200) {
        this.state = response.data.state;
      } else if (response.status === 404) {
        response = await this.$http.post('/room/create');

        if (response.isError) {
          console.error(response);
          clearInterval(this.heartbeat!);
        }
      } else {
        console.error(response);
        clearInterval(this.heartbeat!);
      }
    },
  },
});
</script>
