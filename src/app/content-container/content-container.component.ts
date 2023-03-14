import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  public renderComponents: boolean;
  constructor(private loginService: LoginService) {
    this.renderComponents = true;
    this.loginService.loginData$.subscribe((value) => {
      if (value.playerName !== '' && value.email !== '')
        this.renderComponents = false;
    });
  }

  ngOnInit(): void {}
}
