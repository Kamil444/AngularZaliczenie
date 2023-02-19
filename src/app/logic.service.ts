import { Injectable } from '@angular/core';
import { playerData, gameStats, controlEvent } from '../app/types/types-data';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogicService {
  public loginData$: Observable<playerData>;
  public statisticsData$: Observable<gameStats>;
  public controlEvents$: Observable<controlEvent[]>;
  public loginSubject: BehaviorSubject<playerData>;
  public gameStatsSubject: BehaviorSubject<gameStats>;
  public controlEventsSubject: BehaviorSubject<controlEvent[]>;
  private controlEventsArray: Array<controlEvent>;

  constructor() {
    this.loginSubject = new BehaviorSubject({
      playerName: 'test',
      email: '',
    });
    this.gameStatsSubject = new BehaviorSubject({
      timePlayed: 0,
      gameStatus: 'Press start to play!',
      gameScore: 0,
    });
    this.controlEventsSubject = new BehaviorSubject([
      {
        buttonPressed: '',
        time: 0,
      },
    ]);
    this.loginData$ = this.loginSubject.asObservable();
    this.statisticsData$ = this.gameStatsSubject.asObservable();
    this.controlEvents$ = this.controlEventsSubject.asObservable();
    this.controlEventsArray = [];
  }

  public passEvent(userData: playerData) {
    this.loginSubject.next(userData);
  }

  public passStats(gameStatistics: gameStats) {
    this.gameStatsSubject.next(gameStatistics);
  }

  public passControlEventsArray(controlEvent: controlEvent) {
    this.controlEventsArray.push({ ...controlEvent });
    console.log;

    this.controlEventsSubject.next(this.controlEventsArray);
  }
}
