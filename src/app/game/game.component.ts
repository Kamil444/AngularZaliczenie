import { Component, OnInit } from '@angular/core';
import { gameStats, controlEvent } from '../types/types-data';
import { GameStatsService } from '../game-stats/game-stats.service';
import { GamelistService } from '../game-list/gamelist.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  private statistics: gameStats;
  private isPlayerPlaying: boolean = false;
  private controlEvent: controlEvent;
  constructor(
    private gameStatsService: GameStatsService,
    private gameListService: GamelistService
  ) {
    this.statistics = {
      timePlayed: 0,
      gameStatus: 'Press start to play!',
      gameScore: 0,
    };
    this.controlEvent = {
      buttonPressed: '',
      time: 0,
    };
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.isPlayerPlaying === true) {
        this.statistics.timePlayed++;
        this.gameStatsService.passStats(this.statistics);
      }
    }, 1000);
  }

  public onLineCleared() {
    this.statistics.gameScore++;
    this.gameListService.passControlEventsArray(this.controlEvent);
  }
  public statusStarted() {
    this.statistics.gameStatus = 'Started';
    this.isPlayerPlaying = true;
  }
  public statusStoped() {
    this.statistics.gameStatus = 'Stoped';
    this.isPlayerPlaying = false;
  }
  public statusReset() {
    this.statistics.gameStatus = 'Press start to play!';
    this.statistics.gameScore = 0;
    this.statistics.timePlayed = 0;
    this.isPlayerPlaying = false;
  }
  private passControlEvents(buttonValue: string) {
    this.controlEvent.buttonPressed = buttonValue;
    this.controlEvent.time = this.statistics.timePlayed;
  }
  public leftButtonEvent() {
    this.passControlEvents('Left Button');
    this.gameListService.passControlEventsArray(this.controlEvent);
  }
  public rightButtonEvent() {
    this.passControlEvents('Right Button');
    this.gameListService.passControlEventsArray(this.controlEvent);
  }
  public downButtonEvent() {
    this.passControlEvents('Down Button');
    this.gameListService.passControlEventsArray(this.controlEvent);
  }
  public dropButtonEvent() {
    this.passControlEvents('Drop Button');
    this.gameListService.passControlEventsArray(this.controlEvent);
  }
}
