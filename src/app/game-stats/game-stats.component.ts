import { Component, OnInit } from '@angular/core';
import { take, takeUntil, takeWhile } from 'rxjs';
import { LoginService } from '../login/login.service';
import { playerData, GameState } from '../types/types-data';
import { GameStatsService } from './game-stats.service';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.scss'],
})
export class GameStatsComponent implements OnInit {
  public displayUserData!: playerData;
  public displayStatistics!: GameState;

  constructor(
    private loginService: LoginService,
    private gameStats: GameStatsService
  ) {
    this.loginService.loginData$.pipe(take(1)).subscribe((value) => {
      this.displayUserData = value;
    });
    this.gameStats.statisticsData$.pipe(take(5)).subscribe((value) => {
      this.displayStatistics = value;
    });
  }

  ngOnInit(): void {}
}
