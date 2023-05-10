import { Component } from '@angular/core';
import { Challenge } from 'src/app/class/challenges';
import { Course } from 'src/app/class/course';
import { Stage } from 'src/app/class/stage';
import { DataCourseFireService } from 'src/app/services/data-course-fire.service';

@Component({
  selector: 'app-dropdown-challenges',
  templateUrl: './dropdown-challenges.component.html',
  styleUrls: ['../dropdown.component.scss']
})
export class DropdownChallengesComponent {
  lowChallenges: Challenge[] = [];
  medChallenges: Challenge[] = [];
  hardChallenges: Challenge[] = [];

  constructor(private db: DataCourseFireService) { }

  ngOnInit(): void {
    let courseUrl = document.location.href.split("/").pop()?.replace("%20", " ");
    this.db.getParticularCourse(courseUrl || "")
      .then((data: Course | null) => {
        if (data != null) {
          data.getChallenges().forEach((l: Challenge) => {
            switch (l.getStage()) {
              case Stage.LOW: this.lowChallenges.push(l); break;
              case Stage.MEDIUM: this.medChallenges.push(l); break;
              case Stage.HIGH: this.hardChallenges.push(l); break;
            }
          })
        }
      })
  }

  openDisplay(id: string) {
    let element = document.getElementById(id);
    element?.classList.toggle("displayed");

  }
}
