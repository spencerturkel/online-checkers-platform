<template>
  <div>
    <b-alert
      :show="showError"
      variant="danger"
    >There was an error upgrading your account. Please try again - you will not be charged twice.</b-alert>
    <b-button ref="btn" variant="success" @click.prevent="open">Remove Ads</b-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({ handler: null! as StripeCheckoutHandler, showError: false }),
  mounted() {
    const script = document.createElement('script');
    script.src = 'https://checkout.stripe.com/checkout.js';
    script.onload = () => {
      this.handler = StripeCheckout.configure({
        key: 'pk_test_QFyYavGnzjs8kSHLHL1AKW0N',
        image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
        source: source => this.upgrade(source.id, source.owner.email),
      });
    };
    (this.$refs.btn as HTMLElement).appendChild(script);
  },
  methods: {
    open() {
      this.handler.open({
        name: 'OnlineCheckersPlatform',
        description: 'Remove Ads',
        amount: 50,
      });
    },
    async upgrade(token: string, email: string | null) {
      const { isSuccess } = await this.$http.post('/user/upgrade', {
        stripeEmail: email,
        stripeToken: token,
      });

      if (isSuccess) {
        this.$root.$data.user.isPremium = true;
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
  },
});
</script>
