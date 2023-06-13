import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameoverService } from './gameover.service';

@Component({
  selector: 'app-gameover',
  templateUrl: './gameover.component.html',
  styleUrls: ['./gameover.component.scss'],
})
export class GameoverComponent implements OnInit {
  private test: any;
  constructor(
    public dialogRef: MatDialogRef<GameoverComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private gameOverService: GameoverService
  ) {}

  ngOnInit(): void {}

  postScoreToDatabase() {
    this.data.button = true;
  }

  save() {
    const highScoreObject = this.gameOverService.getScore(this.data.score);
    this.gameOverService.postHighScore(highScoreObject);
    this.dialogRef.close(this.data.button);
  }

  close() {
    this.dialogRef.close(this.data.button);
  }
}
