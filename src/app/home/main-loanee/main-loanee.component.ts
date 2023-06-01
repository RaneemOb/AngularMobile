import { Component, OnInit } from '@angular/core';
import { OfferService  } from 'src/app/offer.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { Router, NavigationStart } from '@angular/router';
@Component({
  selector: 'app-main-loanee',
  templateUrl: './main-loanee.component.html',
  styleUrls: ['./main-loanee.component.scss'],
})
export class MainLoaneeComponent  implements OnInit {

  constructor(public offerService:OfferService,public menuController: MenuController,private router: Router ) { }
Offers:any
isOpen = false;
async  ngOnInit() {
await this.offerService.GetOffersForMain()
this.Offers=this.offerService.MainOffers
console.log(this.Offers)
this.router.events.subscribe((event) => {
  if (event instanceof NavigationStart) {
    this.isOpen = false; // Close the popover when navigation starts
  }
});
  }

  
}
