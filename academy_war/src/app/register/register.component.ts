import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../header/header.component.scss', './register.component.scss', './validations.scss']
})
export class RegisterComponent {
  constructor(private auth: AuthService, private modal: ModalService) {

  }
  onRegister(data: any) {
    console.log(data.mail.value, data.name.value, data.password.value);
    this.auth.register(
      data.mail.value,
      data.name.value,
      data.password.value
    );
    this.modal.closeDialog();
  }
}
