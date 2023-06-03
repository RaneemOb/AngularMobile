import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { EmailService } from 'src/app/email.service';
import { LoanService } from 'src/app/loan.service';

import { OfferService  } from 'src/app/offer.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-my-loans',
  templateUrl: './my-loans.component.html',
  styleUrls: ['./my-loans.component.scss'],
})
export class MyLoansComponent  implements OnInit {
  Stat = Stat;
  @ViewChild('popover') popover?:any;
  constructor(private router: Router,public email:EmailService,public loanService:LoanService,public loginService:LoginService) { }
  isOpen = false;
  loans:any
  loaneeid:any
  ConfirmationLoans:any
  showMore: boolean = false;
  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  async ngOnInit() {
   await  this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isOpen = false; // Close the popover when navigation starts
      }
    });
    console.log(localStorage.getItem("Loaneeid"))
    await this.loanService.GetCurrentAndFinishedLoans(localStorage.getItem("Loaneeid"))
    this.loans = this.loanService.CurrentAndFinishedLoans
    console.log(this.loanService.CurrentAndFinishedLoans);
    this.loaneeid= await localStorage.getItem('LoaneeID')
    await this.loanService.GetConfirmLoans(localStorage.getItem("Loaneeid"))
    this.ConfirmationLoans = this.loanService.LoansConfirmation
    console.log(this.loanService.LoansConfirmation)
    console.log(parseInt(this.loaneeid));
  }
SelectedLoanID:any
SelectedLenderID:any
SelectedFirstName:any
SelectedEmail:any
  m:any
  s:any
   CancelSelectedLoan(loanID:any,LenderID:any,FirstName:any,email:any)
  {
    this.SelectedLoanID=loanID;
    this.SelectedLenderID=LenderID;
    this.SelectedFirstName=FirstName;
    this.SelectedEmail=email;
    this.s="Loan Request Cancelation"
    this.m="To inform you that the loan #"+this.SelectedLoanID+ " has been rejected by the loanee."
  
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.maxWidth = '800px';
    // dialogConfig.maxHeight = '80vh';
    //  this.dialog.open(this.CancelLoan);
  }
  async RequestCancelation()
  {
  await this.loanService.deleteLoan(this.SelectedLoanID);
  await this.sendEmail(this.SelectedEmail,this.SelectedFirstName,this.m,this.s);
  await this.ngOnInit();
  }
  async sendEmail(email: string, receiver: string, mess: string, sub: string) {
    const emailParams = {
      toemail: email,
      subject: sub,
      receivername: receiver,
      message: mess
    };
  
    await this.email.SentEmail(emailParams);
  }
  toggleShowMore() {
    this.showMore = !this.showMore;
  }
}
enum Stat {
  pending =0,
  waitForConfirm=2,
  inProgress = 3,
  Completed = 4
}