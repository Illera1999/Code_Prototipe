import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../header/header.component.scss', './register.component.scss', './validations.scss']
})
export class RegisterComponent {
  onRegister(data: any) {
    console.log(data.mail.value, data.name.value, data.password.value);

  }
}
