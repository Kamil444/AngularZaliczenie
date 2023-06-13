export * from './types-data';

export interface playerData {
  playerName: string;
  token: number;
  email: string;
}

export interface GameState {
  timePlayed: number;
  gameStatus: GameStatus;
  gameScore: number;
  gameMessage: GameMessage;
}

export interface controlEvent {
  buttonPressed: string;
  time: number;
}

export interface controlEventt {
  index: number;
  buttonPressed: string;
  time: number;
}
export interface authToken {
  authtoken: number;
}

export interface highScore {
  name: string;
  game: Game;
  score: number;
}
export enum highScoreFilter {
  myScores = 'My Scores',
  all = 'All',
}

export enum eventFilters {
  leftButton = 'Left Button',
  rightButton = 'Right Button',
  downButton = 'Down Button',
  dropButton = 'Drop Button',
  all = 'All',
}
export type Game = 'tetris';
export type Action = 'up' | 'down' | 'left' | 'right';
export type GameStatus = 'inital' | 'started' | 'paused' | 'ended';
export type GameMessage =
  | 'Started'
  | 'Stopped'
  | 'Paused'
  | 'Ended'
  | 'Press Enter to Play!';
