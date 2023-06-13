import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { MatDialogModule } from '@angular/material/dialog';
import { GameoverModule } from '../gameover/gameover.module';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    TetrisCoreModule,
    MatDialogModule,
    GameoverModule,
    MatSliderModule,
  ],
  exports: [GameComponent],
})
export class GameModule {}
