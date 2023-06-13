import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { take } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent implements OnInit {
  public renderComponents: boolean;
  private color: string = '#663399';
  public backGroundTile: string;
  public backGroundBar: string;
  public borderColor: string;
  private defaultPageColors = {
    topBar: `linear-gradient(rgb(94, 91, 247), ${this.color})`,
    tiles: `linear-gradient(${this.color}, rgb(22, 34, 43) 90%)`,
    border: `${this.color}`,
  };
  constructor(
    private loginService: LoginService,
    private _route: ActivatedRoute
  ) {
    this.backGroundTile = this.defaultPageColors.tiles;
    this.backGroundBar = this.defaultPageColors.topBar;
    this.borderColor = this.defaultPageColors.border;
    this.renderComponents = true;
    this.loginService.loginData$.pipe(take(1)).subscribe((value) => {
      if (value.playerName !== '' && value.email !== '')
        this.renderComponents = false;
    });
    this._route.params.subscribe((params) => {
      this.color = params['color'];
      this.updatecolors();
    });
  }
  ngOnInit(): void {}
  ngOnDestroy(): void {
    localStorage.setItem('authentication', 'false');
  }

  public updatecolors() {
    this.backGroundTile = `linear-gradient(${this.color}, rgb(22, 34, 43) 90%`;
    this.backGroundBar = `linear-gradient(rgb(94, 91, 247), ${this.color})`;
    this.borderColor = ` ${this.color}`;
  }
}
