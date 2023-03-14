import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentContainerComponent } from './content-container/content-container.component';
import { ErrorsComponent } from './errors/errors.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'tetris', title: 'Tetris', component: ContentContainerComponent },
  { path: '**', component: ErrorsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
