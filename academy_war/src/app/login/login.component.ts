import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../header/header.component.scss', '../register/register.component.scss', '../register/validations.scss']
})
export class LoginComponent {
  onLogin(thing: any) {
    console.log(thing.mail.value, thing.password.value);
  }

}