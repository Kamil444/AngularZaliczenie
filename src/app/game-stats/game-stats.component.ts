import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import { playerData, gameStats } from '../types/types-data';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.scss'],
})
export class GameStatsComponent implements OnInit {
  public displayUserData!: playerData;
  public displayStatistics!: gameStats;
  constructor(private logicService: LogicService) {
    this.logicService.loginData$.subscribe((value) => {
      this.displayUserData = value;
    });
    this.logicService.statisticsData$.subscribe((value) => {
      this.displayStatistics = value;
    });
  }

  ngOnInit(): void {}
}
