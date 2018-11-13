<template>
  <div>
    <div class="info">
      <h2>Against {{otherName}}</h2>
      <dl>
        <dt>Dark Player</dt>
        <dd v-text="darkPlayer"></dd>
        <dt>Light Player</dt>
        <dd v-text="lightPlayer"></dd>
        <dt>Current Player</dt>
        <dd v-text="currentPlayer"></dd>
      </dl>
    </div>
    <table class="center">
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
            <div v-else :class="['piece', getClassFor(rowIndex, columnIndex)]">&nbsp;</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { Board, PlayingState, Room, Space } from './room-state';

/**
 * Displays and facilitates the actual checkers game.
 */
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
    currentPlayer(): string {
      return this.room.state.game.currentColor === 'D'
        ? this.darkPlayer
        : this.lightPlayer;
    },
    darkPlayer(): string {
      return this.room.challenger.id === this.room.state.game.darkId
        ? this.room.challenger.name
        : this.room.state.opponent.name;
    },
    lightPlayer(): string {
      return this.room.challenger.id === this.room.state.game.lightId
        ? this.room.challenger.name
        : this.room.state.opponent.name;
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

<style scoped>
/*Makes the image take up the whole screen*/
/* html,
body {
  height: 100%;
  width: 100%;
  margin: 0px;
} */

.row {
  position: absolute;
  width: 100%;
  height: 12.5%;
}

.dark {
  background-color: black;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.light {
  background-color: white;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.L {
  background-color: white;
  border-radius: 100% 100%;
}

.D {
  background-color: gray;
  border-radius: 100% 100%;
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
  height: auto;
  width: 46%;

  top: 0;
  bottom: 50%;
  left: 18.62%;
}

.piece {
  width: 60px;
  height: 60px;

  vertical-align: middle;

  margin-left: auto;
  margin-right: auto;
}

.info {
  position: absolute;
  width: 18%;

  left: 0;
  top: 0;
}
</style>
