export * from './types-data';

export interface playerData {
  playerName: string;
  email: string;
}

export interface gameStats {
  timePlayed: number;
  gameStatus: string;
  gameScore: number;
}

export interface controlEvent {
  buttonPressed: string;
  time: number;
}

export enum timeFilters {
  ascennd = 'Ascend',
  descend = 'Descend',
}

export enum eventFilters {
  score = 'Score',
  leftButton = 'Left Button',
  rightButton = 'Right Button',
  downButton = 'Down Button',
  dropButton = 'Drop Button',
  all = 'All',
}
