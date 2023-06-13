import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { highScore } from '../types/types-data';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getScore(): Observable<highScore[]> {
    return this.http.get<highScore[]>('http://localhost:8080/scores/tetris', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  }
  public postLoginToken(token: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/check-token', token);
  }
  public postScore(score: highScore): Observable<any> {
    console.log(score);
    return this.http.post<highScore>('http://localhost:8080/scores', score);
  }
}
