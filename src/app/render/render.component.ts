import { Component, OnInit } from '@angular/core';
import { LogicService } from '../logic.service';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss'],
})
export class RenderComponent implements OnInit {
  public renderComponents: boolean;
  constructor(private logicService: LogicService) {
    this.renderComponents = true;
    this.logicService.loginData$.subscribe((value) => {
      if (value.playerName !== '' && value.email !== '')
        this.renderComponents = false;
    });
  }

  ngOnInit(): void {}
}
