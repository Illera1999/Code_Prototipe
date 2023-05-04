import { Component } from '@angular/core';
import { DataUserFireService } from '../services/data-user-fire.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../header/header.component.scss', './register.component.scss']
})
export class RegisterComponent {

  onRegister(data: any){
    data.mail.value //mail
    data.name.value //name
    data.password.value //passwd
    
  }

}
