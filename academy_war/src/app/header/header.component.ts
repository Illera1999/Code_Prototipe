import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { User } from '../class/user';
import { DataUserFireService } from '../services/data-user-fire.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected user: User | undefined;

  constructor(private modal: ModalService, private auth: AuthService) {
    let temp = localStorage.getItem("user");
    if (temp) {
      let v = JSON.parse(temp)
      this.user = new User(v['id'], v['username']);
    }
  }

  openLogin() {
    this.modal.openDialog(LoginComponent, "500px", "600px");
  }

  openRegister() {
    this.modal.openDialog(RegisterComponent, "500px", "600px");
  }

  logout() {
    this.auth.logout();
  }
}
