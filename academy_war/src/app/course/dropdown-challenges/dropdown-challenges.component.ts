import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Challenge } from 'src/app/class/challenges';
import { Course } from 'src/app/class/course';
import { Stage } from 'src/app/class/stage';
import { DataCourseFireService } from 'src/app/services/data-course-fire.service';
import { DataUserFireService } from 'src/app/services/data-user-fire.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-dropdown-challenges',
  templateUrl: './dropdown-challenges.component.html',
  styleUrls: ['../dropdown.component.scss']
})
export class DropdownChallengesComponent {
  lowChallenges: Challenge[] = [];
  medChallenges: Challenge[] = [];
  hardChallenges: Challenge[] = [];

  pl = "";

  isUserPremium: boolean = false;

  constructor(private db: DataCourseFireService,
    private user: DataUserFireService,
    private subs: SubscriptionService, protected router: Router) {
    this.isUserSubscripted();
  }

  ngOnInit(): void {
    let courseUrl = document.location.href.split("/").pop()?.replace("%20", " ");
    this.db.getParticularCourse(courseUrl || "")
      .then((data: Course | null) => {
        if (data != null) {
          data.getChallenges().forEach((c: Challenge) => {
            this.pl = data.getProgrammingLanguage();
            let mail = this.user.getLocalUserEmail();
            this.subs.isUserSubscribe(mail, this.pl).then((data: any) => {
              this.isUserPremium = data;
              console.log(this.isUserPremium);

            });
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

  isUserSubscripted() {
    let user = this.user.getLocalUserEmail();
    console.log(user);
    this.subs.getSubscriptionFromUser(user['email'])
    if (user) {
      this.isUserPremium = false;
    }
  }

  openChallenge(id: String) {
    this.router.navigate(['/challenge/' + id])
  }
}
