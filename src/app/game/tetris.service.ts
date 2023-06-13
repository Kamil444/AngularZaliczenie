import { Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subject, interval } from 'rxjs';
import { GameState } from '../types/types-data';

@Injectable({
  providedIn: 'root',
})
export class TetrisService {
  constructor() {}

  private stopTime: Subject<void> = new Subject();
  private gameTimeInterval$: Observable<number> = interval(1000);
  private gameControllInterval$: Observable<number> = interval(200);

  private initialState: GameState = {
    timePlayed: 0,
    gameStatus: 'inital',
    gameScore: 0,
    gameMessage: 'Press Enter to Play!',
  };

  private gameStateSource: BehaviorSubject<GameState> =
    new BehaviorSubject<GameState>(this.initialState);
}
