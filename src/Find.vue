<template>
  <div>
    <h1>Find a Room</h1>
    <b-btn
      variant="primary"
      :disabled="finding"
      @click="find"
      v-text="finding ? 'Finding...' : 'No Rooms found. Try again?'"
    ></b-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Finds a public room, or returns the user to their existing room.
 */
export default Vue.extend({
  name: 'Find',
  data: () => ({ finding: false }),
  async created() {
    this.finding = true;

    if ((await this.$http.get('/room')).isSuccess) {
      this.$router.push('/room');
    } else {
      await this.find();
    }
  },
  methods: {
    async find() {
      this.finding = true;
      const response = await this.$http.post('/room/join');

      if (response.isSuccess) {
        this.$router.push('/room');
      } else {
        this.finding = false;
      }
    },
  },
});
</script>
