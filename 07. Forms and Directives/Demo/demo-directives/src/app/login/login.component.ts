import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, AfterViewInit {

  // @ViewChild('loginForm') loginForm: NgForm | undefined;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    
  }

  submitHandler(form: NgForm): void {
    if(form.invalid){
      return;
    }
    
    console.log(form);
    const value: {email:string; password:string}=form.value;
    console.log(value);
    form.setValue({
      email: '',
      password: ''
    });
    

  }
}
