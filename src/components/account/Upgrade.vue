<template>
    <b-button ref="btn" variant="success" @click.prevent="open">Remove Ads</b-button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({ handler: null! as StripeCheckoutHandler }),
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
      await this.$http.post(
        '/user/upgrade',
        {
          stripeEmail: email,
          stripeToken: token,
        },
        { validateStatus: status => status >= 200 && status < 300 },
      );

      this.$root.$data.user.isPremium = true;
    },
  },
});
</script>
