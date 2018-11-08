<template>
  <b-container>
    <h1>Room</h1>
    <b-btn variant="danger" @click="leave">Leave</b-btn>
    <template v-if="state">
      <waiting-room v-if="state.name === 'waiting'"></waiting-room>
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
  data: () => ({ state: null } as { state: RoomState | null }),
  async beforeCreate() {
    if ((await this.$http.head('/user')).isError) {
      this.$router.replace('/');
    }
  },
  destroyed() {
    console.warn('destroyed');
  },
  async created() {
    while (this.$el && !this.state) {
      let response = await this.$http.get('/room');

      if (response.status === 200) {
        this.state = response.data.state;
      } else if (response.status === 404) {
        response = await this.$http.post('/room/create');

        if (response.isError) {
          // TODO: handle errors
          console.error(response);
        }
      } else {
        // TODO: handle error
        console.error(response);
      }
    }
  },
  methods: {
    async leave() {
      await this.$http.post('/room/leave');
      this.$router.push('/');
    },
  },
});
</script>
