import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { gameStats } from '../types/types-data';

@Injectable({
  providedIn: 'root',
})
export class GameStatsService {
  public statisticsData$: Observable<gameStats>;
  public gameStatsSubject: BehaviorSubject<gameStats>;

  constructor() {
    this.gameStatsSubject = new BehaviorSubject({
      timePlayed: 0,
      gameStatus: 'Press start to play!',
      gameScore: 0,
    });
    this.statisticsData$ = this.gameStatsSubject.asObservable();
  }

  public passStats(gameStatistics: gameStats) {
    this.gameStatsSubject.next(gameStatistics);
  }
}
