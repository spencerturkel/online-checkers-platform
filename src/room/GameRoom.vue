<template>
  <div>
    <h1>Against {{otherName}}</h1>
    <table>
      <tbody>
        <tr v-for="(row, rowIndex) in board" :key="rowIndex">
          <td
            v-for="(space, columnIndex) in row"
            :key="columnIndex"
            :class="getClassFor(rowIndex, columnIndex)"
            @dragenter.prevent="void 0"
            @dragover.prevent="void 0"
            @drop="drop(rowIndex, columnIndex)"
          >
            <div
              v-if="space"
              draggable="true"
              @dragstart="dragstart($event, rowIndex, columnIndex)"
              :class="[space, 'piece']"
            >&nbsp;</div>
            <div v-else>&nbsp;</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Board, PlayingState, Room, Space } from './room-state';

export default Vue.extend({
  name: 'GameRoom',
  props: {
    room: Object as () => Room & { state: PlayingState },
    update: Function,
  },
  data: () => ({
    dragging: null as null | { rowIndex: number; columnIndex: number },
    movingPiece: null as Space,
  }),
  computed: {
    board(): Board {
      return this.room.state.game.board;
    },
    isChallenger(): boolean {
      return this.$user!.id === this.room.challenger.id;
    },
    otherName(): string {
      return this.isChallenger
        ? this.room.state.opponent.name
        : this.room.challenger.name;
    },
  },
  methods: {
    dragEnter(rowIndex: number, columnIndex: number) {
      return;
    },
    dragstart(event: DragEvent, rowIndex: number, columnIndex: number): void {
      event.dataTransfer.dropEffect = 'move';
      event.dataTransfer.setData('text/plain', ''); // Required for Firefox
      this.dragging = { rowIndex, columnIndex };
      this.movingPiece = this.board[rowIndex][columnIndex];
      console.log(this.movingPiece);
      this.board[rowIndex][columnIndex] = null;
      console.log(this.board[rowIndex][columnIndex]);
      this.setCell(null, rowIndex, columnIndex);
    },
    async drop(rowIndex: number, columnIndex: number): Promise<void> {
      const response = await this.$http.post('/room/move', {
        from: {
          row: this.dragging!.rowIndex,
          column: this.dragging!.columnIndex,
        },
        to: { row: rowIndex, column: columnIndex },
      });

      if (response.isError) {
        // TODO: report error
        console.error(response);
        return;
      }

      this.update();

      console.log('Dropped at (%d, %d)', rowIndex, columnIndex);
      this.board[rowIndex][columnIndex] = this.movingPiece;
      console.log(this.board!);
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
    setCell(state: Space, rowIndex: number, columnIndex: number) {
      const row = this.board[rowIndex].slice(0);
      row[columnIndex] = state;
      this.$set(this.board!, rowIndex, row);
    },
  },
});
</script>
