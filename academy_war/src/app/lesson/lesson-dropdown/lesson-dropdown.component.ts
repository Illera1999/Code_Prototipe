import { Component, OnInit } from '@angular/core';
import { LessonSideNavService } from 'src/app/services/lesson-side-nav.service';

@Component({
  selector: 'app-lesson-dropdown',
  templateUrl: './lesson-dropdown.component.html',
  styleUrls: ['./lesson-dropdown.component.scss']
})



export class LessonDropdownComponent implements OnInit {
  constructor(public sideNavService: LessonSideNavService){}
  fruits: any[] | undefined = [
    {
      name: "banana"
    },
    {
      name: "pear"
    },
    {
      name: "apple"
    },
  ]

  ngOnInit(): void {
      
  }
}
