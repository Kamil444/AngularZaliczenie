import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable, map, take, takeUntil, tap } from 'rxjs';
import { highScore } from '../types/types-data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { highScoreFilter } from '../types/types-data';
import { LoginService } from '../login/login.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.scss'],
})
export class HighscoreComponent implements OnInit {
  public highScores$: Observable<any>;
  public columnsToDisplay = ['index', 'name', 'score'];
  public filterHighScore: FormGroup;
  public enumHighScoreFilter = highScoreFilter;
  private userName: string = '';
  private dataSource = new MatTableDataSource<highScore>();

  constructor(
    private http: HttpService,
    private fb: FormBuilder,
    private loginService: LoginService

  ) {
    this.loginService.loginData$.pipe(take(1)).subscribe((value) => {
      this.userName = value.playerName;
    });

    this.highScores$ = this.http.getScore().pipe(
      map((data) => {
        const highScore = this.dataSource;
        const filteredData = data
          .slice(0, 10)
          .sort((a, b) => b.score - a.score)
          .map((element, index) => ({
            ...element,
            index: index + 1,
          }));
        highScore.data = filteredData;
        return highScore;
      })
    );

    this.filterHighScore = this.fb.group({
      scoreFilter: 'All',
    });
  }

  ngOnInit(): void {}

  public listColorChange(place: number) {
    if (place === 1) {
      return 'first-place';
    } else if (place === 2) {
      return 'second-place';
    } else if (place === 3) {
      return 'third-place';
    }
    return 'rest';
  }

  filterData() {
    if (this.scoreFilter !== 'All') {
      this.dataSource.filter = this.userName;
    } else {
      this.dataSource.filter = '';
    }
  }

  get scoreFilter() {
    return this.filterHighScore.get('scoreFilter')?.value;
  }
}
