import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { User } from '../class/user';
import { AuthService } from '../services/auth.service';
import { DataCourseFireService } from '../services/data-course-fire.service';
import { Course } from '../class/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  protected user: User | undefined;
  courses: { name: string, id: string }[] = [];

  constructor(private modal: ModalService, private auth: AuthService,
    private router: Router, private dbCourses: DataCourseFireService) {
    let temp = localStorage.getItem("user");
    if (temp) {
      let v = JSON.parse(temp)
      this.user = new User(v['id'], v['username'], [], []);
    }

    this.getcourses();

  }

  async getcourses() {
    await this.dbCourses.setAllCourse().then((data: Course[]) => {
      data.forEach((c: Course) => this.courses.push({ name: c.getName(), id: c.getId() }))
    })
  }

  /* Flecha */
  arrow: boolean = true;
  toogle() {
    this.arrow = !this.arrow;
    document.getElementById("courses")?.classList.toggle("show")
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

  openCourse(place: string) {
    this.router.navigate(["/course/" + place]);
  }

}
