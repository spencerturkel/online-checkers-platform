<template>
    <h1>Joining...</h1>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Join',
  async mounted() {
    const response = await this.$http.post(
      `/room/join/${this.$route.params.invitationToken}`,
    );

    if (response.isSuccess) {
      this.$router.replace('/room/');
    } else {
      // TODO: report error
      console.error(response);
      this.$router.replace('/');
    }
  },
});
</script>
