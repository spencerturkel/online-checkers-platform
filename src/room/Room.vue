<template>
  <b-container>
    <h1>Room</h1>
    <b-btn variant="danger" @click="leave">Leave</b-btn>
    <template v-if="room">
      <waiting-room v-if="room.state.name === 'waiting'" :state="room.state" :update="updateRoom"></waiting-room>
      <deciding-room v-else-if="room.state.name === 'deciding'" :room="room" :update="updateRoom"></deciding-room>
      <game-room v-else :room="room" :update="updateRoom"></game-room>
    </template>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue';

import DecidingRoom from './DecidingRoom.vue';
import GameRoom from './GameRoom.vue';
import { Room } from './room-state';
import WaitingRoom from './WaitingRoom.vue';

/**
 * Displays and continually updates rooms.
 */
export default Vue.extend({
  name: 'Room',
  components: {
    DecidingRoom,
    GameRoom,
    WaitingRoom,
  },
  data: () =>
    ({ heartbeat: null, room: null } as {
      heartbeat: NodeJS.Timer | null;
      room: Room | null;
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
        this.room = response.data;
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
