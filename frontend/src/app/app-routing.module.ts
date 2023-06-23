import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ContactosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
