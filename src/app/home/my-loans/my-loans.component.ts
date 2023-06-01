import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-my-loans',
  templateUrl: './my-loans.component.html',
  styleUrls: ['./my-loans.component.scss'],
})
export class MyLoansComponent  implements OnInit {

  constructor(private router: Router) { }
  isOpen = false;
  async ngOnInit() {
   await  this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isOpen = false; // Close the popover when navigation starts
      }
    });
  }

}
