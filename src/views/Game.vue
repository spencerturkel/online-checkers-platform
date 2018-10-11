<template>
    <div>
        <HelloWorld msg="Guess a Digit (0 - 9)"/>

        <form class="container" @submit="submit">
            <input id="Enter" type="number" min="0" max="9" v-model="digit">
        </form>
        <p>{{message}}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import HelloWorld from '@/components/HelloWorld.vue';
import { delay } from '../util';

export default Vue.extend({
  name: 'game-screen',
  components: {
    HelloWorld,
  },
  data: () => ({ alive: true, digit: null, message: '' }),
  beforeDestroy() {
    this.alive = false;
  },
  async mounted() {
    while (this.alive) {
      const result = await this.$http.get('/game/waiting');

      if (result.status === 204) {
        this.$router.push('/lose');
        return;
      }

      await delay(200 /* milliseconds */);
    }
  },
  methods: {
    async submit() {
      const result = await this.$http.post('/game/guess', {
        digit: this.digit,
      });

      if (result.status === 404) {
        this.$router.push('/lose');
        return;
      }

      const { correct }: { correct: boolean } = result.data;

      if (correct) {
        this.$router.push('/win');
      } else {
        this.message = 'Try again!';
        await delay(300);
        this.message = '';
      }
    },
  },
});
</script>

<style scoped>
.Link {
  position: absolute;
}

#Win {
  top: 85%;
}
#Lose {
  top: 95%;
}

.container {
  position: absolute;
  top: 50%;
  width: 100%;
  display: block;
  text-align: center;
}

#Enter {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
