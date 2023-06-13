import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { GameState, controlEvent } from '../types/types-data';
import { GameStatsService } from '../game-stats/game-stats.service';
import { GamelistService } from '../game-list/gamelist.service';
import { MatDialog } from '@angular/material/dialog';
import { GameoverComponent } from '../gameover/gameover.component';
import { TetrisCoreComponent } from 'ngx-tetris';
import { take } from 'rxjs';
import { Router } from '@angular/router';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  private statistics: GameState;
  private controlEvent: controlEvent;
  public openModal: boolean = false;
  public sliderNumber: number = 0;

  constructor(
    private gameStatsService: GameStatsService,
    private gameListService: GamelistService,
    public gameOverPopUp: MatDialog,
    private router: Router
  ) {
    this.statistics = {
      timePlayed: 0,
      gameStatus: 'inital',
      gameScore: 0,
      gameMessage: 'Press Enter to Play!',
    };
    this.controlEvent = {
      buttonPressed: '',
      time: 0,
    };
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.statistics.gameStatus === 'started') {
        if (this.controlEvent.buttonPressed !== '') {
          this.gameListService.passControlEventsArray(this.controlEvent);
        }
        this.controlEvent.buttonPressed = '';
      }
    }, 200);
    setInterval(() => {
      if (this.statistics.gameStatus === 'started') {
        this.statistics.timePlayed++;
        this.gameStatsService.passStats(this.statistics);
      }
    }, 1000);
  }
  @ViewChild(TetrisCoreComponent) game: any;
  @HostListener('document:keydown', ['$event']) keyPressed(
    event: KeyboardEvent
  ) {
    console.log(event);
    switch (event.key) {
      case 'ArrowUp': {
        this.game.actionRotate();
        this.passControlEvents('Left Button');

        break;
      }
      case 'ArrowDown': {
        this.game.actionDown();
        this.passControlEvents('Drop Button');

        break;
      }
      case 'ArrowRight': {
        this.game.actionRight();
        this.passControlEvents('Right Button');

        break;
      }
      case 'ArrowLeft': {
        this.game.actionLeft();
        this.passControlEvents('Left Button');

        break;
      }
      case 'Enter': {
        this.game.actionStart();
        this.statusStarted();
        break;
      }
      case 'Escape': {
        this.game.actionReset();
        this.statusReset();
        break;
      }
      case 'Shift': {
        this.game.actionStop();
        this.statusStoped();
        break;
      }
    }
  }

  public onLineCleared() {
    this.statistics.gameScore++;
    this.gameListService.passControlEventsArray(this.controlEvent);
  }
  public statusStarted() {
    this.statistics.gameStatus = 'started';
    this.statistics.gameMessage = 'Started';
  }
  public statusStoped() {
    this.statistics.gameStatus = 'paused';
    this.statistics.gameMessage = 'Stopped';
  }
  public statusReset() {
    this.statistics.gameStatus = 'started';
    this.statistics.gameScore = 0;
    this.statistics.timePlayed = 0;
    this.statistics.gameMessage = 'Started';
  }
  private passControlEvents(buttonValue: string) {
    this.controlEvent.buttonPressed = buttonValue;
    this.controlEvent.time = this.statistics.timePlayed;
  }
  public gameOver() {
    this.statistics.gameStatus = 'ended';
    this.statistics.gameMessage = 'Ended';
    this.openDialog();
  }
  private newGame() {
    this.statistics.gameStatus = 'inital';
    this.statistics.gameScore = 0;
    this.statistics.timePlayed = 0;
    this.statistics.gameMessage = 'Press Enter to Play!';
    this.game.actionReset();
  }
  private openDialog() {
    const popup = this.gameOverPopUp.open(GameoverComponent, {
      width: '300x',
      height: '500px',
      data: { score: this.statistics.gameScore, button: false },
    });
    popup
      .afterClosed()
      .pipe(take(1))
      .subscribe(() => {
        this.newGame();
      });
  }
  public selectColor(sliderNumber: MatSliderChange) {
    const numberToHexdecimal = sliderNumber.value?.toString(16);
    const color = `#${numberToHexdecimal}`;
    this.router.navigate(['/tetris', color]);
  }
}
