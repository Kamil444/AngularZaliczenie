import { Component, OnInit } from '@angular/core';
import { eventFilters, timeFilters, controlEvent } from '../types/types-data';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, take } from 'rxjs';
import { GamelistService } from './gamelist.service';

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
  private controllEventDisplaySubscription: Subscription;

  constructor(
    private gameListService: GamelistService,
    private fb: FormBuilder
  ) {
    this.controllEventDisplaySubscription =
      this.gameListService.controlEvents$.subscribe((value) => {
        this.controlEventsDisplay = value;
      });
    this.selectedFilters = this.fb.group({
      eventFilter: 'All',
      timeFilter: 'Ascend',
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.controllEventDisplaySubscription.unsubscribe();
  }

  get eventFilter() {
    return this.selectedFilters.get('eventFilter')?.value;
  }
  get timeFilter() {
    return this.selectedFilters.get('timeFilter')?.value;
  }
}
