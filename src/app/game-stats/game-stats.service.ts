import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { GameState } from '../types/types-data';

@Injectable({
  providedIn: 'root',
})
export class GameStatsService {
  public statisticsData$: Observable<GameState>;
  public gameStatsSubject: BehaviorSubject<GameState>;

  private initObject: GameState = {
    timePlayed: 0,
    gameStatus: 'inital',
    gameScore: 0,
    gameMessage: 'Press Enter to Play!',
  };

  constructor() {
    this.gameStatsSubject = new BehaviorSubject(this.initObject);
    this.statisticsData$ = this.gameStatsSubject.asObservable();
  }

  public passStats(gameStatistics: GameState) {
    this.gameStatsSubject.next(gameStatistics);
  }
}
