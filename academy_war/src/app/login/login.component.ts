import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../header/header.component.scss', '../register/register.component.scss', '../register/validations.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService, private modal: ModalService) {

  }
  onLogin(data: any) {
    console.log(data.mail.value, data.password.value);
    this.auth.login(
      data.mail.value, 
      data.password.value);
  }
}