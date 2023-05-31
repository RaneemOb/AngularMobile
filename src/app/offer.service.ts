import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor( private http: HttpClient, private spinner: NgxSpinnerService, private router: Router, private toaster: ToastrService) { }

  MainOffers: any = [];
  GetOffersForMain() {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show();
      this.http.get("https://localhost:44397/api/Offer/GetLoaneeMain").subscribe(
        (res) => {
          this.MainOffers = res
          debugger
          this.spinner.hide();
          resolve()
        },
        (err) => {
          console.log(err);
          this.spinner.hide();
        }
      )
    })
  }


}
