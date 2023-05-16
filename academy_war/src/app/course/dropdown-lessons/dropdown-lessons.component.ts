import { Component } from '@angular/core';
import { Course } from 'src/app/class/course';
import { Lesson } from 'src/app/class/lesson';
import { Stage } from 'src/app/class/stage';
import { Router } from '@angular/router';
import { DataCourseFireService } from 'src/app/services/data-course-fire.service';
import { DataUserFireService } from 'src/app/services/data-user-fire.service';
import { ModalService } from 'src/app/services/modal.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { PayModalComponent } from '../pay-modal/pay-modal.component';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-dropdown-lessons',
  templateUrl: './dropdown-lessons.component.html',
  styleUrls: ['../dropdown.component.scss']
})
export class DropdownLessonsComponent {
  lowLessons: Lesson[] = [];
  medLessons: Lesson[] = [];
  hardLessons: Lesson[] = [];
  course: Course | undefined;

  pl = "";

  isUserPremium: boolean = false;

  constructor(private db: DataCourseFireService,
    private user: DataUserFireService,
    private subs: SubscriptionService,
    private modal: ModalService,
    private router: Router) { }
  arrow1: boolean = true;
  arrow2: boolean = true;
  arrow3: boolean = true;

  ngOnInit(): void {
    let courseUrl = document.location.href.split("/").pop()?.replace("%20", " ");
    this.db.getParticularCourse(courseUrl || "")
      .then((data: Course | null) => {
        if (data != null) {
          this.course = data;
          this.pl = data.getProgrammingLanguage();
          let mail = this.user.getLocalUserEmail();
          this.subs.isUserSubscribe(mail, this.pl).then((data: any) => {
            this.isUserPremium = data;
          });
          data.getLessons().forEach((l: Lesson) => {
            switch (l.getStage()) {
              case Stage.LOW: this.lowLessons.push(l); break;
              case Stage.MEDIUM: this.medLessons.push(l); break;
              case Stage.HIGH: this.hardLessons.push(l); break;
            }
          })
        }
      })
  }

  openDisplay(id: string) {
    switch(id){
      case "low":
        this.arrow1 = !this.arrow1;
        break;
      
      case "mid":
        this.arrow2 = !this.arrow2;
        break;
      
      case "high":
        this.arrow3 = !this.arrow3;
        break;
    }
    let element = document.getElementById(id);
    element?.classList.toggle("displayed");
  }

  openLesson(id: String) {
    this.router.navigate(['/lesson/' + id])
  }

  openModal() {
    let user = this.user.getLocalUserEmail();
    if (!user) this.modal.openDialog(LoginComponent, "500px", "600px");
    else this.modal.openDialog(PayModalComponent, "500px", "600px", this.course);
  }

}
