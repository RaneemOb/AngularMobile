import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule,NavigationStart  } from '@angular/router';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    IonicModule,
    NgbDropdownModule,
    RouterModule
  ]
  ,
  exports:[
MenuComponent
  ]
})
export class SharedModule { }
