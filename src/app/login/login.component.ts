import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public playerDataForm: FormGroup;

  constructor(private fb: FormBuilder, private logicService: LogicService) {
    this.playerDataForm = this.fb.group({
      playerName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(32),
          Validators.pattern('^[a-zA-Z ]*$'),
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
    this.logicService.passEvent(this.playerDataForm.value);
  }
}
