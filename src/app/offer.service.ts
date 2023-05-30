import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor( private http: HttpClient, private spinner: NgxSpinnerService, private router: Router, private toaster: ToastrService) { }
}
