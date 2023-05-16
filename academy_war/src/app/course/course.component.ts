import { Component } from '@angular/core';
import { Course } from '../class/course';
import { DataCourseFireService } from '../services/data-course-fire.service';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss', '../home/home.component.scss']
})
export class CourseComponent {
  course: Course[] = new Array(1);

  show: vMenu = {
    challenges: false,
    description: true,
    lessons: false
  };

  editorOptions = { theme: 'vs-dark', language: 'c' };
  code: string = '#include <stdio.h>\n\tint main() {\n\tprintf("Hello World!"); \n\treturn 0;\n }';

  constructor(private db: DataCourseFireService) {
    let courseUrl = document.location.href.split("/").pop()?.replaceAll("%20", " ");
    let v: Course;
    db.getParticularCourse(courseUrl || "")
      .then((data: Course | null) => {
        if (data != null) this.course[0] = data;
      })
  }

  getView(e: any) {
    this.show = e;
  }


}
export interface vMenu {
  description: boolean,
  lessons: boolean,
  challenges: boolean
}