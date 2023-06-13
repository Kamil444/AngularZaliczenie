import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ErrorsComponent } from './errors/errors.component';
import { LoginguardGuard } from './guards/loginguard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', title: 'Login', component: LoginComponent },
  {
    path: 'tetris/:color',
    title: 'Tetris',
    component: ContentContainerComponent,
    canActivate: [LoginguardGuard],
  },
  { path: '**', component: ErrorsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
