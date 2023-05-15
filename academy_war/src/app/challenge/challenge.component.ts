import { Component } from '@angular/core';
import { Course } from '../class/course';
import { DataCourseFireService } from '../services/data-course-fire.service';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent {
  course!: Course | null;

  protected description : any;
  constructor(private db: DataCourseFireService) {
    db.getParticularCourse("Course C").then((data: Course | null) => {
      if (data != null) this.course = data;
    })
  }

  editorOptions = { theme: 'vs-dark', language: 'c' };
  code: string = '#include <stdio.h>\n\tint main() {\n\tprintf("Hello World!"); \n\treturn 0;\n }';
}
