import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStatsComponent } from './game-stats.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [GameStatsComponent],
  imports: [CommonModule, MatGridListModule],
  exports: [GameStatsComponent],
})
export class GameStatsModule {}
