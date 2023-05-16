import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
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

  protected description : any;
  constructor(private db: DataCourseFireService, private router: Router) {
    let lessonName = document.location.href.split("/").pop()?.replaceAll("%20", " ");
    router.events.subscribe((val) =>{
      if (val instanceof NavigationStart){
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
          }
        }
      }
      // console.log(this.lesson); 
    });
    console.log(this.course)
    console.log(this.course.at(0))
    
  }

}
