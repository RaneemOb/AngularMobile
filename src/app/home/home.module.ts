import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { HomePageRoutingModule } from './home-routing.module';
import { MainLoaneeComponent } from './main-loanee/main-loanee.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
@NgModule({
    declarations: [HomePage,
      MainLoaneeComponent
    ,
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        SharedModule,
       HttpClientModule,
       RouterModule,
       
    ]
})
export class HomePageModule {}
