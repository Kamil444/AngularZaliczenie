import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from './game/game.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { RenderComponent } from './render/render.component';
import { GameStatsComponent } from './game-stats/game-stats.component';
import { GameListComponent } from './game-list/game-list.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    RenderComponent,
    GameStatsComponent,
    GameListComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, NgbModule, ReactiveFormsModule, TetrisCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
