import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { playerData } from '../types/types-data';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginData$: Observable<playerData>;
  public loginSubject: BehaviorSubject<playerData>;

  constructor() {
    this.loginSubject = new BehaviorSubject({
      playerName: '',
      email: '',
    });
    this.loginData$ = this.loginSubject.asObservable();
  }

  public passLoginData(userData: playerData) {
    this.loginSubject.next(userData);
  }
}
