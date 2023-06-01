import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor( private formBuilder: FormBuilder,public loginService:LoginService) { }
  LoginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  

  })
  get UserName(): FormControl {
    return this.LoginForm.get("email") as FormControl;
  }

  get Password(): FormControl {
    return this.LoginForm.get("password") as FormControl;
  }
  get Email(): FormControl {
    return this.LoginForm.get("email") as FormControl;
  }
  CheckUser() {
   
    this.loginService.login(this.LoginForm.value);
  }
  ngOnInit() {}

}
