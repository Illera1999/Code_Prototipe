import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/class/course';
import { DataCourseFireService } from 'src/app/services/data-course-fire.service';

@Component({
  selector: 'app-lesson-dropdown',
  templateUrl: './lesson-dropdown.component.html',
  styleUrls: ['./lesson-dropdown.component.scss']
})



export class LessonDropdownComponent implements OnInit {
  protected hideSideNav: boolean = false;
  // protected sidebarTop?: string;
  // protected sidebarHeight?: string;

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //   const headerHeight = document.querySelector('header')?.offsetHeight;
  //   this.sidebarTop = window.pageYOffset + 'px';
  //   this.sidebarHeight = `calc(100vh - ${headerHeight}px)`;
  // }

  course!: Course | null;

  constructor(private db: DataCourseFireService) {
    db.getParticularCourse("Course C").then((data: Course | null) => {
      if (data != null) this.course = data;
    })
  }

  ngOnInit(): void {
      
  }

  toggleSideNav() {
    return this.hideSideNav = !this.hideSideNav;
  }
}
