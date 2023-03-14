import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { controlEvent } from '../types/types-data';

@Injectable({
  providedIn: 'root',
})
export class GamelistService {
  public controlEvents$: Observable<controlEvent[]>;

  public controlEventsSubject: BehaviorSubject<controlEvent[]>;
  private controlEventsArray: Array<controlEvent>;
  constructor() {
    this.controlEventsSubject = new BehaviorSubject([
      {
        buttonPressed: '',
        time: 0,
      },
    ]);

    this.controlEvents$ = this.controlEventsSubject.asObservable();
    this.controlEventsArray = [];
  }

  public passControlEventsArray(controlEvent: controlEvent) {
    this.controlEventsArray.push({ ...controlEvent });
    console.log;

    this.controlEventsSubject.next(this.controlEventsArray);
  }
}
