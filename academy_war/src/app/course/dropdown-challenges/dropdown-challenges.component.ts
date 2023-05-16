import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/class/challenges';
import { Course } from 'src/app/class/course';
import { Stage } from 'src/app/class/stage';
import { DataCourseFireService } from 'src/app/services/data-course-fire.service';
import { DataUserFireService } from 'src/app/services/data-user-fire.service';
import { ModalService } from 'src/app/services/modal.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { PayModalComponent } from '../pay-modal/pay-modal.component';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-dropdown-challenges',
  templateUrl: './dropdown-challenges.component.html',
  styleUrls: ['../dropdown.component.scss']
})
export class DropdownChallengesComponent {
  lowChallenges: Challenge[] = [];
  medChallenges: Challenge[] = [];
  hardChallenges: Challenge[] = [];
  course: Course | undefined;

  pl = "";

  isUserPremium: boolean = false;

  constructor(private db: DataCourseFireService,
    private user: DataUserFireService,
    private modal: ModalService,
    private subs: SubscriptionService,
    protected router: Router) { }

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
          data.getChallenges().forEach((c: Challenge) => {
            switch (c.getStage()) {
              case Stage.LOW: this.lowChallenges.push(c); break;
              case Stage.MEDIUM: this.medChallenges.push(c); break;
              case Stage.HIGH: this.hardChallenges.push(c); break;
            }
          })
        }
      })
  }

  openDisplay(id: string) {
    let element = document.getElementById(id);
    element?.classList.toggle("displayed");
  }

  openModal() {
    let user = this.user.getLocalUserEmail();
    if (!user) this.modal.openDialog(LoginComponent, "500px", "600px");
    else this.modal.openDialog(PayModalComponent, "500px", "600px", this.course);
  }

  openChallenge(id: String) {
    this.router.navigate(['/challenge/' + id])
  }
}
