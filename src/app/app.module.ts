import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameComponent } from './game/game.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { GameStatsComponent } from './game-stats/game-stats.component';
import { GameListComponent } from './game-list/game-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { ErrorsComponent } from './errors/errors.component';
import { ContentContainerComponent } from './content-container/content-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    ContentContainerComponent,
    GameStatsComponent,
    GameListComponent,
    FilterPipe,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    TetrisCoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
