import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { MainLoaneeComponent } from './main-loanee/main-loanee.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MyLoansComponent } from './my-loans/my-loans.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
  ,
  {
    path:'main',
    component:MainLoaneeComponent
  },
  {
    path:'My-loans',
    component:MyLoansComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes) ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
