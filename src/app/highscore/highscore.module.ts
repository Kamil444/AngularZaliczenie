import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighscoreComponent } from './highscore.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [HighscoreComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  exports: [HighscoreComponent],
})
export class HighscoreModule {}
