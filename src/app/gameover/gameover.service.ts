import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { LoginService } from '../login/login.service';
import { highScore } from '../types/types-data';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameoverService {
  private userName: string;
  private highScore: highScore;

  constructor(private loginService: LoginService, private http: HttpService) {
    this.userName = '';
    this.highScore = { name: '', game: 'tetris', score: 0 };

    this.loginService.loginData$.pipe(take(1)).subscribe((data) => {
      this.userName = data.playerName;
    });
  }

  public getScore(scoreNumber: number) {
    this.highScore.name = this.userName;
    this.highScore.score = scoreNumber;
    return this.highScore;
  }

  public postHighScore(highScore: highScore) {
    this.http
      .postScore(highScore)
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data);
      });
  }
}
