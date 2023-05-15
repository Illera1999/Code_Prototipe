import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';
import { DataCourseFireService } from '../services/data-course-fire.service';
import { Course } from '../class/course';
import { Lesson } from '../class/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent {
  course: Course[] = [];

  protected lesson: Lesson[] = new Array(1);;

  protected description : any;
  constructor(private db: DataCourseFireService) {
    db.getParticularCourse("Course C").then((data: Course | null) => {
      if (data != null) {
        this.course[0] = data;
        for (let i = 0; i < data.getLessons().length; i++) {
          if (data.getLessons()[i].getTitle() == lessonName) {
            this.lesson[0] = data.getLessons()[i];
          }
        }
      }
      console.log(this.lesson); 
    })
    let lessonName = document.location.href.split("/").pop()?.replaceAll("%20", " ");
    console.log(this.course)
    console.log(this.course.at(0))
    
  }

  // findLesson(lesson: any){
  //   let les : Lesson = new Lesson({datos: {
  //     usersCompleted: new Array<string>(),
  //     id: "",
  //     title: "",
  //     description: "",
  //     stage: ""
  //   }});
  //   console.log(this.course);
  //   for (let i = 0; i < this.course!.getLessons().length; i++) {
  //     if (this.course!.getLessons()[i] == lesson) {
  //       return this.course!.getLessons()[i];
  //     }
  //   }
  //   console.log(les)
  //   return les;
  // }

}
