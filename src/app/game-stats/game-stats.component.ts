import { Component, OnInit } from '@angular/core';
import { Subscription, take } from 'rxjs';
import { LoginService } from '../login/login.service';
import { playerData, gameStats } from '../types/types-data';
import { GameStatsService } from './game-stats.service';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.scss'],
})
export class GameStatsComponent implements OnInit {
  public displayUserData!: playerData;
  public displayStatistics!: gameStats;
  private statisticDataSubscription: Subscription;
  constructor(
    private loginService: LoginService,
    private gameStats: GameStatsService
  ) {
    this.loginService.loginData$
      .pipe(take(1))
      .subscribe((value) => {
        this.displayUserData = value;
      })
      .unsubscribe();
    this.statisticDataSubscription = this.gameStats.statisticsData$.subscribe(
      (value) => {
        this.displayStatistics = value;
      }
    );
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.statisticDataSubscription.unsubscribe();
  }
}
