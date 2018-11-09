<template>
  <table>
    <tr
      v-for="(row, rowIndex) in board"
      :key="rowIndex">
        <td
          v-for="(space, columnIndex) in row"
          :key="columnIndex"
          :class="getClassFor(rowIndex, columnIndex)"
          @dragenter.prevent="void 0"
          @dragover.prevent="void 0"
          @drop="drop(rowIndex, columnIndex)"
          draggable="false">
          <div
          v-if="space"
          draggable="true"
          @dragstart="dragstart($event, rowIndex, columnIndex)"
          :class="[space, 'piece']">
            &nbsp;
        </div>

        <div v-else>
          &nbsp;
        </div>
        </td>
    </tr>
  </table>
</template>

<script lang="ts">
type Board = Array<Array<string | null>> | null;

import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    board: null as Board,
    dragging: null as null | { rowIndex: number; columnIndex: number },
    movingPiece: null as null | string,
  }),
  async mounted(): Promise<void> {
    this.board = [
      [null, 'D', null, 'DK', null, 'D', null, 'D'],
      ['D', null, 'D', null, 'D', null, 'D', null],
      [null, 'D', null, 'D', null, 'D', null, 'D'],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      ['L', null, 'L', null, 'L', null, 'L', null],
      [null, 'L', null, 'LK', null, 'L', null, 'L'],
      ['L', null, 'L', null, 'L', null, 'L', null],
    ];
  },
  methods: {
    dragEnter(rowIndex: number, columnIndex: number) {
      return;
    },
    dragstart(event: DragEvent, rowIndex: number, columnIndex: number): void {
      // Picks up the first location
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.setData('text/plain', ''); // Required for Firefox
      this.dragging = { rowIndex, columnIndex };
      this.movingPiece = this.board![rowIndex][columnIndex];
      this.board![rowIndex][columnIndex] = null;
      this.setCell(null, rowIndex, columnIndex);
    },
    drop(rowIndex: number, columnIndex: number): void {
      console.log('Dropped at (%d, %d)', rowIndex, columnIndex);
      this.board![rowIndex][columnIndex] = this.movingPiece;
      this.setCell(this.movingPiece, rowIndex, columnIndex);
      this.movingPiece = null;
    },
    getClassFor(rowIndex: number, columnIndex: number): string {
      if (rowIndex % 2 === 0) {
        return columnIndex % 2 === 0 ? 'light' : 'dark';
      } else {
        return columnIndex % 2 === 0 ? 'dark' : 'light';
      }
    },
    setCell(state: null | string, rowIndex: number, columnIndex: number) {
      const row = this.board![rowIndex].slice(0);
      row[columnIndex] = state;
      this.$set(this.board!, rowIndex, row);
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

.row {
  position: absolute;
  width: 100%;
  height: 12.5%;
}

.dark {
  background-color: black;
}

.light {
  background-color: white;
}

.L {
  background-color: white;
  border-radius: 50%;
}

.D {
  background-color: gray;
  border-radius: 50%;
}

.DK {
  background: url('../assets/BCrown.png') no-repeat;
  background-size: 100% 100%;
}

.LK {
  background: url('../assets/WCrown.png') no-repeat;
  background-size: 100% 100%;
}

table {
  position: absolute;
  height: 100%;
  width: 62.74%;

  top: 0;
  left: 18.62%;
}

.piece {
  width: 75%;
  height: 75%;

  vertical-align: middle;

  margin-left: auto;
  margin-right: auto;
}

td {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}
</style>
