import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  appEmailDomains= DEFAULT_EMAIL_DOMAINS;

  constructor(private userService: UserService, private router: Router){

  }

  login(form: NgForm): void { 
    console.log(form.value);
    if(form.invalid){
      return;
    }
    
    //todo handlig for data
    this.userService.login();
    this.router.navigate(['/']);
  }
}
