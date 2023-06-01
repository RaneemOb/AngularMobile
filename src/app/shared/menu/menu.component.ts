import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {
 

  constructor(public loginService:LoginService,private router: Router) { }
firstName:any
LastName:any

@ViewChild('popover') popover?:any;

isOpen = false;

presentPopover(e: Event) {
  this.popover.event = e;
  this.isOpen = true;
}
  async ngOnInit() {
this.firstName=await localStorage.getItem('LoaneeName');
this.LastName=await localStorage.getItem('LoaneeLastName')
this.router.events.subscribe((event) => {
  if (event instanceof NavigationStart) {
    this.isOpen = false; // Close the popover when navigation starts
  }
});
  }
  
  
}
