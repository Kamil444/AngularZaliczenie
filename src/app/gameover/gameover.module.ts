import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameoverComponent } from './gameover.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [GameoverComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [GameoverComponent],
})
export class GameoverModule {}
