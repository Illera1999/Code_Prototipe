import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/class/course';
import { DataCourseFireService } from 'src/app/services/data-course-fire.service';

@Component({
  selector: 'app-challenge-dropdown',
  templateUrl: './challenge-dropdown.component.html',
  styleUrls: ['./challenge-dropdown.component.scss']
})
export class ChallengeDropdownComponent {
  protected hideSideNav: boolean = false;
  protected open: string = "<";
  protected close: string = ">";

  course!: Course | null;

  constructor(private db: DataCourseFireService) {
    db.getParticularCourse("Course C").then((data: Course | null) => {
      if (data != null) this.course = data;
    })
  }

  ngOnInit(): void {
      
  }

  toggleSideNav() {
    console.log(this.course)
    return this.hideSideNav = !this.hideSideNav;
    
  }
}
