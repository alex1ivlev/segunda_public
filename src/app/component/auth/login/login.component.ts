import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthService} from "../../../service/auth.service";

interface LoginForm {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }
  submit(form: NgForm) {
    this.authService.login(form.value);
  }
}
