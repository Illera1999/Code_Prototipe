import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
import { DataCourseFireService } from '../services/data-course-fire.service';
import { Course } from '../class/course';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {
  course!: Course | null;

  protected description : any;
  constructor(private db: DataCourseFireService) {
    db.getParticularCourse("Course C").then((data: Course | null) => {
      if (data != null) this.course = data;
    })
  }

}
