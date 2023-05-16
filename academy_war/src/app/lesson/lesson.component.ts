import { Component } from '@angular/core';
import { DataCourseFireService } from '../services/data-course-fire.service';
import { Course } from '../class/course';
import { Lesson } from '../class/lesson';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {
  course: Course[] = [];

  protected lesson: Lesson[] = new Array(1);
  protected beforeLesson: string[] = []
  protected afterLesson: string[] = [];

  protected description: any;
  constructor(private db: DataCourseFireService, private router: Router) {
    let lessonName = document.location.href.split("/").pop()?.replaceAll("%20", " ");
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        window.location.reload();
      }
    });
    db.getParticularCourse("Course C").then((data: Course | null) => {
      if (data != null) {
        this.course[0] = data;
        for (let i = 0; i < data.getLessons().length; i++) {
          console.log(data.getLessons()[i].getTitle());
          if (data.getLessons()[i].getTitle() == lessonName) {
            this.lesson[0] = data.getLessons()[i];
            if (i + 1 <= data.getLessons().length) this.afterLesson.unshift(data.getLessons()[i + 1].getTitle());
            if (i - 1 >= 0) this.beforeLesson.unshift(data.getLessons()[i - 1].getTitle());
          }
        }
      }
    });
  }

  openLesson(id: string) {

    this.router.navigate(['/lesson/', id]);
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }

}
