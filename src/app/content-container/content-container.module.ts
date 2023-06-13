import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container.component';
import { GameModule } from '../game/game.module';
import { GameListModule } from '../game-list/game-list.module';
import { GameStatsModule } from '../game-stats/game-stats.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { HighscoreModule } from '../highscore/highscore.module';

@NgModule({
  declarations: [ContentContainerComponent],
  imports: [
    CommonModule,
    GameModule,
    GameListModule,
    GameStatsModule,
    HighscoreModule,
    MatGridListModule,
  ],
  exports: [ContentContainerComponent],
})
export class ContentContainerModule {}
