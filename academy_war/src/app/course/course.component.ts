import { Component } from '@angular/core';
import { Course } from '../class/course';
import { DataCourseFireService } from '../services/data-course-fire.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss', '../home/home.component.scss']
})
export class CourseComponent {
  course: Course[] = new Array(1);

  showDescription: boolean = true;
  showChallenges: boolean = true;
  showLessons: boolean = true;

  constructor(private db: DataCourseFireService) {
    let courseUrl = document.location.href.split("/").pop()?.replace("%20", " ");
    let v: Course;
    db.getParticularCourse(courseUrl || "")
      .then((data: Course | null) => {
        if (data != null) this.course[0] = data;
      })
  }

}
