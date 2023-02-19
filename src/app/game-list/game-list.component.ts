import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';
import { eventFilters, timeFilters, controlEvent } from '../types/types-data';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  public enumTimeFilters: object = timeFilters;
  public enumEventFilters: object = eventFilters;
  public controlEventsDisplay!: Array<controlEvent>;
  public selectedFilters: FormGroup;

  constructor(private logicService: LogicService, private fb: FormBuilder) {
    this.logicService.controlEvents$.subscribe((value) => {
      this.controlEventsDisplay = value;
    });
    this.selectedFilters = this.fb.group({
      eventFilter: 'All',
      timeFilter: 'Ascend',
    });
  }

  ngOnInit(): void {}

  get eventFilter() {
    return this.selectedFilters.get('eventFilter')?.value;
  }
  get timeFilter() {
    return this.selectedFilters.get('timeFilter')?.value;
  }
}
