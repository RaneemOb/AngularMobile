import { Component, OnInit } from '@angular/core';
import { OfferService  } from 'src/app/offer.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
@Component({
  selector: 'app-main-loanee',
  templateUrl: './main-loanee.component.html',
  styleUrls: ['./main-loanee.component.scss'],
})
export class MainLoaneeComponent  implements OnInit {

  constructor(public offerService:OfferService,public menuController: MenuController ) { }
Offers:any
async  ngOnInit() {
await this.offerService.GetOffersForMain()
this.Offers=this.offerService.MainOffers
console.log(this.Offers)
  }
  toggleMenu() {
    this.menuController.toggle();
  }
  
}
