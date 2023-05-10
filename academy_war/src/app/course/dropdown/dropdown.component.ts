import { Component, OnInit } from '@angular/core';
import { Course } from '../../class/course';
import { DataCourseFireService } from '../../services/data-course-fire.service';
import { Lesson } from '../../class/lesson';
import { Stage } from '../../class/stage';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  lowLessons: Lesson[] = [];
  medLessons: Lesson[] = [];
  hardLessons: Lesson[] = [];

  constructor(private db: DataCourseFireService) { }

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

}
