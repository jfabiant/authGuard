import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  user = {
    email: null,
    password: null
  }

  login() {
    this._authService.login();
  }

  loginAdmin() {
    this._authService.loginAdmin(this.user.email, this.user.password);
  }

}