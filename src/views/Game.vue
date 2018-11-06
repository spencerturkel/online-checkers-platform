<template>
  <div>
    <h1>Play Checkers Against {{$route.query.opponent}}</h1>
    <draggable>
      <b-container>
        <b-row v-for="(row, rowIndex) in board" :key="rowIndex">
          <b-col v-for="(space, spaceIndex) in row" :key="spaceIndex">{{space}}</b-col>
        </b-row>
      </b-container>
    </draggable>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { delay } from '../util';

export default Vue.extend({
  // data: () => ({}),
  // beforeDestroy() {},
  // async mounted() {},
  // methods: {
  //   async drop() {},
  // },
});
</script>

<style scoped>
</style>
