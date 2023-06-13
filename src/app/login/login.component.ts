import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public playerDataForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private _router: Router
  ) {
    this.playerDataForm = this.fb.group({
      playerName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(24),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      token: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  public submit() {
    this.loginService.passLoginData(
      this.playerDataForm.value,
      this.playerDataForm.get('token')?.value
    );
    this._router.navigate(['tetris', '#663399']);
  }
}
