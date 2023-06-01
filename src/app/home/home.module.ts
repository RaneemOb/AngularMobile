import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { HomePageRoutingModule } from './home-routing.module';
import { MainLoaneeComponent } from './main-loanee/main-loanee.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,NavigationStart  } from '@angular/router';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [HomePage,
      MainLoaneeComponent
    ,
    LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        SharedModule,
       HttpClientModule,
       RouterModule,
       ReactiveFormsModule
       
    ]
})
export class HomePageModule {}
