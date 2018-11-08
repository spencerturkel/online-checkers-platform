/**
 * The user present in the Room.
 */
export interface RoomUser {
  id: string;
  name: string;
}

/**
 * The Room state where a user is waiting for an opponent.
 */
export interface WaitingState {
  /**
   * Whether the waiting user wants to be matched with the public.
   */
  public: boolean;
  /**
   * UUID assigned when the challenger invites an opponent.
   */
  invitationToken?: string;
  name: 'waiting';
}

export type Decision = 'challenger' | 'opponent' | 'random';

/**
 * The Room state where the users are deciding who will go first.
 */
export interface DecidingState {
  name: 'deciding';
  challengerDecision: Decision | null;
  opponent: RoomUser;
  opponentDecision: Decision | null;
  /**
   * The ID of the user who won the previous game, if any.
   */
  previousWinnerId?: string;
}

/**
 * The Room state where the users are playing a game.
 */
export interface PlayingState {
  name: 'playing';
  game: {
    currentColor: 'D' | 'L';
    board: Array<Array<'D' | 'DK' | 'L' | 'LK' | null>>;
    darkId: string;
    lightId: string;
  };
  opponent: RoomUser;
}

export type RoomState = WaitingState | DecidingState | PlayingState;
