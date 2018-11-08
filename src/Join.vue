<template>
  <div>
    <h1>Joining...</h1>
    <b-form v-if="!auth" @submit="submit">
      <b-form-group
        label="Guest Name"
        label-for="guestName"
        description="This is the name that your opponent will see."
      >
        <b-form-input id="guestName" type="text" required v-model="guestName"></b-form-input>
      </b-form-group>
      <b-button type="primary" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Join',
  data: () => ({ auth: false, guestName: '' }),
  async created() {
    this.auth = (await this.$http.head('/user')).isSuccess;

    if (this.auth) {
      await this.join();
    }
  },
  methods: {
    async submit() {
      const response = await this.$http.post('/auth/guest', {
        name: this.guestName,
      });

      if (response.isError) {
        // TODO: report error
        console.error(response);
        this.$router.replace('/');
        return;
      }

      await this.join();
    },
    async join() {
      const response = await this.$http.post('/room/join/', {
        token: this.$route.params.token,
      });

      if (response.isSuccess) {
        this.$router.replace('/room/');
      } else {
        // TODO: report error
        console.error(response);
        this.$router.replace('/');
      }
    },
  },
});
</script>
