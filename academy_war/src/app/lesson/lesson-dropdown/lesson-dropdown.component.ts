import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/class/course';
import { DataCourseFireService } from 'src/app/services/data-course-fire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-dropdown',
  templateUrl: './lesson-dropdown.component.html',
  styleUrls: ['./lesson-dropdown.component.scss']
})



export class LessonDropdownComponent implements OnInit {
  protected hideSideNav: boolean = false;
  protected open: string = "<";
  protected close: string = ">";

  course!: Course | null;

  constructor(private db: DataCourseFireService, protected router: Router) {
    db.getParticularCourse("Course C").then((data: Course | null) => {
      if (data != null) this.course = data;
    })
  }

  ngOnInit(): void {
    console.log(document.location.href);

  }

  toggleSideNav() {
    return this.hideSideNav = !this.hideSideNav;
  }

  openLesson(id: String) {
    this.router.navigate(['/lesson/', id]);
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }
}
