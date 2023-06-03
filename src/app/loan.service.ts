import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private router: Router, private toaster: ToastrService) { }
  deleteLoan(loanId: number) {
    return new Promise<void>((resolve, reject) => {
      this.http.delete("https://localhost:44397/api/Loan/DeleteLoan/" + loanId).subscribe(
        {
          next: () => {
            this.spinner.hide()
            this.toaster.success("Deleted Loan Successfuly");

            resolve()
          },
          error: () => {
            this.spinner.hide()
            this.toaster.error("Try Again");

          }
        }
      )
    })

  }
  CurrentAndFinishedLoans:any
  GetCurrentAndFinishedLoans(LID:any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show();
      this.http.get("https://localhost:44397/api/Loanee/GetCurrentAndFinishedLoans/"+LID).subscribe(
        (res) => {
          this.CurrentAndFinishedLoans = res
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
  LoansConfirmation:any = []
  GetConfirmLoans(loaneeid:any) {
    return new Promise<void>((resolve, reject) => {
      debugger
      this.spinner.show();
      this.http.get("https://localhost:44397/api/Loanee/GetConfirmLoans/"+loaneeid).subscribe(
        (res) => {
          this.LoansConfirmation = res
          debugger
          this.spinner.hide();
          resolve()
        },
        (err) => {
          console.log(err);
          debugger
          this.spinner.hide();
        }
      )
    })
  }
  GiveComplaintForLender(Complaint:any) {
    return new Promise<void>((resolve, reject) => {
      this.spinner.show();
      this.http.post("https://localhost:44397/api/Loanee/giveComplaintForLender",Complaint).subscribe(
        () => {
          this.toaster.success("Reported Successfully")
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
  updatePostponeStatus(LoanId: any, status: any, loaneeid: any) {
    debugger
    return new Promise<void>((resolve, reject) => {
      this.http.put("https://localhost:44397/api/Loan/UpdatePostponeStatus/" + LoanId + "/" + status + "/" + loaneeid, {}).subscribe(
        () => {
          this.toaster.success("Postpone Status Updated Successfully")
          debugger
          resolve()
        },
        (err) => {
          console.log(err);
          this.toaster.error("Postpone Status Did not updated")
          debugger
          this.spinner.hide();
        }
      )
    })
  }
}
