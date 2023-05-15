import { Component } from '@angular/core';
import { Course } from 'src/app/class/course';
import { Lesson } from 'src/app/class/lesson';
import { Stage } from 'src/app/class/stage';
import { Router } from '@angular/router';
import { DataCourseFireService } from 'src/app/services/data-course-fire.service';

@Component({
  selector: 'app-dropdown-lessons',
  templateUrl: './dropdown-lessons.component.html',
  styleUrls: ['../dropdown.component.scss']
})
export class DropdownLessonsComponent {
  lowLessons: Lesson[] = [];
  medLessons: Lesson[] = [];
  hardLessons: Lesson[] = [];

  constructor(private db: DataCourseFireService, protected router: Router) { }

  ngOnInit(): void {
    let courseUrl = document.location.href.split("/").pop()?.replace("%20", " ");
    this.db.getParticularCourse(courseUrl || "")
      .then((data: Course | null) => {
        if (data != null) {
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
    let element = document.getElementById(id);
    element?.classList.toggle("displayed");

  }

  openLesson(id:String) {
    this.router.navigate(['/lesson/' + id])
  }

}
