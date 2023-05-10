import { Component } from '@angular/core';
import { Course } from '../class/course';
import { DataCourseFireService } from '../services/data-course-fire.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  course: Course[] = [];

  showDescription: boolean = true;
  showChallenges: boolean = true;
  showLessons: boolean = true;

  constructor(private db: DataCourseFireService) {
    let course = document.location.href.split("/").pop()?.replace("%20", " ");

    db.getParticularCourse(course || "")
      .then((c => {
        console.log(c);

      }));
  }

}
