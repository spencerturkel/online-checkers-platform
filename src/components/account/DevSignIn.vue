<template>
    <b-form ref="form" inline novalidate :validated="validated">
        <b-form-input class="mr-2" placeholder="User ID" required v-model="id"></b-form-input>
        <b-form-checkbox class="mx-2" v-model="isPremium">Premium</b-form-checkbox>
        <b-button variant="primary" class="mx-2" @click="submit">Sign In</b-button>
    </b-form>
</template>

<script lang="ts">
import Vue from 'vue';
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
        isPremium: this.isPremium,
      });

      this.$root.$data.user = {
        isPremium: this.isPremium,
        name: `Local User ${this.id}`,
        signOut: async () => null,
      };
    },
  },
});
</script>
