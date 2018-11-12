<template>
  <b-form ref="form" inline novalidate :validated="validated">
    <b-form-input class="mr-2" placeholder="User ID" required v-model="id"></b-form-input>
    <b-button variant="primary" class="mx-2" @click="submit">Sign In</b-button>
  </b-form>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * Developer sign-in using an arbitrary user ID.
 * Will not work in production.
 */
export default Vue.extend({
  data: () => ({ id: '', isPremium: false, validated: false }),
  methods: {
    async submit(): Promise<void> {
      if (!(this.$refs.form as HTMLFormElement).checkValidity()) {
        this.validated = true;
        return;
      }

      await this.$http.post('/auth/local', {
        id: this.id,
      });

      const { userId: id, isPremium, name } = (await this.$http.get(
        '/user',
      )).data;

      this.$user = {
        id,
        isPremium,
        name,
        socialSignOut: async () => null,
      };
    },
  },
});
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>
