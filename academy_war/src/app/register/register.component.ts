import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
import { DataUserFireService } from '../services/data-user-fire.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../header/header.component.scss', './register.component.scss', './validations.scss']
})
export class RegisterComponent {
  constructor(private auth: AuthService) {

  }
  onRegister(data: any) {
    console.log(data.mail.value, data.name.value, data.password.value);
    this.auth.register(
      data.mail.value,
      data.name.value,
      data.password.value
    );
  }
}
