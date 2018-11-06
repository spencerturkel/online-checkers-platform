<template>
  <b-container>
    <b-row v-for="(row, rowIndex) in board" :key="rowIndex">
      <b-col
        v-for="(space, columnIndex) in row"
        :class="getClassFor(rowIndex, columnIndex)"
        :key="columnIndex"
        @dragenter.prevent="dragEnter(rowIndex, columnIndex)"
        @dragover.prevent="dragEnter(rowIndex, columnIndex)"
        @drop="drop(rowIndex, columnIndex)"
      >
        <span v-if="space" draggable="true" @dragstart="dragstart(rowIndex, columnIndex)">
          {{space}}
          <!-- <img src="@/assets/PWhitePiece.png"> -->
        </span>
        <span v-else>null</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
type Board = Array<Array<string | null>> | null;
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    board: null as Board,
    dragging: null as null | { rowIndex: number; columnIndex: number },
  }),
  async mounted(): Promise<void> {
    this.board = [
      [null, 'D', null, 'D', null, 'D', null, 'D'],
      ['D', null, 'D', null, 'D', null, 'D', null],
      [null, 'D', null, 'D', null, 'D', null, 'D'],
      [null, null, null, null, null, null, null, null],
      [null, 'L', null, null, null, null, null, null],
      [null, null, 'L', null, 'L', null, 'L', null],
      [null, 'L', null, 'L', null, 'L', null, 'L'],
      ['L', null, 'L', null, 'L', null, 'L', null],
    ];
  },
  methods: {
    dragEnter(rowIndex: number, columnIndex: number) {
      return;
      // console.log(rowIndex, columnIndex);
    },
    dragstart(rowIndex: number, columnIndex: number): void {
      this.dragging = { rowIndex, columnIndex };
    },
    drop(rowIndex: number, columnIndex: number): void {
      console.log('Dropped at (%d, %d)', rowIndex, columnIndex);
    },
    getClassFor(rowIndex: number, columnIndex: number): string {
      if (rowIndex % 2 === 0) {
        return columnIndex % 2 === 0 ? 'dark' : 'light';
      } else {
        return columnIndex % 2 === 0 ? 'light' : 'dark';
      }
    },
  },
});
</script>


<style scoped>
/*Makes the image take up the whole screen*/
html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
}

.dark {
  background-color: red;
}

.light {
  background-color: gray;
}

#Play {
  height: 100%;
  width: 100%;

  position: fixed;

  left: 0px;
  top: 0px;

  z-index: -1;

  background: no-repeat center;
  background-size: cover;
}
</style>
