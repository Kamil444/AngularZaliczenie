import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, take } from 'rxjs';
import { playerData } from '../types/types-data';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginData$: Observable<playerData>;
  public loginSubject: BehaviorSubject<playerData>;

  constructor(private http: HttpService) {
    this.loginSubject = new BehaviorSubject({
      playerName: '',
      token: 0,
      email: '',
    });
    this.loginData$ = this.loginSubject.asObservable();
  }

  public passLoginData(userData: playerData, token: number) {
    this.http
      .postLoginToken({ 'auth-token': token })
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          if (res.success === true) {
            localStorage.setItem('authToken', `${token}`);
            localStorage.setItem('authentication', `${res.success}`);
            console.log(res.success);
          } else {
            console.log(res.success);
          }
        },
        error: (error) => console.log(error),
      });
    this.loginSubject.next(userData);
  }
}
