import { Component, OnInit, ViewChild } from '@angular/core';
import { eventFilters, controlEvent } from '../types/types-data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { GamelistService } from './gamelist.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  private dataSource = new MatTableDataSource<controlEvent>();
  public eventListToDIsplay$: Observable<any>;
  public columnsToDisplay = ['index', 'button', 'time'];
  public filerList: FormGroup;
  public enumActionFilter: object = eventFilters;

  constructor(
    private gameListService: GamelistService,
    private fb: FormBuilder
  ) {
    this.eventListToDIsplay$ = this.gameListService.controlEvents$.pipe(
      map((data) => {
        const listToDisplay = this.dataSource;
        listToDisplay.data = data;
        return listToDisplay;
      })
    );

    this.filerList = this.fb.group({
      actionFilter: 'All',
      timeFilter: 'Ascend',
    });
  }

  ngOnInit(): void {}

  get actionFilter() {
    return this.filerList.get('actionFilter')?.value;
  }
  get timeFilter() {
    return this.filerList.get('timeFilter')?.value;
  }

  filterData() {
    if (this.actionFilter !== 'All') {
      this.dataSource.filter = this.actionFilter.trim().toLowerCase();
    } else {
      this.dataSource.filter = '';
    }
  }
}
