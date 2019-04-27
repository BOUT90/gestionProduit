import { Router } from '@angular/router';
import { AppService } from './../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  credentials = {
    userName: '',
    password: ''
  };

  constructor(private fb: FormBuilder,
              private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        userName: ['', Validators.required, Validators.minLength(4)],
        password: ['', Validators.required, Validators.minLength(4)]
      }
    );
  }

  login() {
    this.appService.authentication(this.credentials, () => {
     this.router.navigateByUrl('/home/(contentOutlet:produit)');
    });
    {

    }

  }

}
