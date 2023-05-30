import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLoaneeComponent } from './login-loanee/login-loanee.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginLoaneeComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
