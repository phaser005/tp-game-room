import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';

//GUARDS
import { LoginGuardGuard } from '../guards/login-guard.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardGuard]},
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo:'home',  pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
