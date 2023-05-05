import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { User } from '../class/user';
import { DataUserFireService } from '../services/data-user-fire.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected user: User | undefined = this.db.getUser();

  constructor(private modal: ModalService, private db: DataUserFireService) { }

  openLogin() {
    this.modal.openDialog(LoginComponent, "500px", "600px");
    this.user = this.db.getUser();


  }

  openRegister() {
    this.modal.openDialog(RegisterComponent, "500px", "600px");
    this.user = this.db.getUser();
    console.log("ocurre");
  }

}
