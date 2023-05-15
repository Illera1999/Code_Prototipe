import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-dropdown',
  templateUrl: './lesson-dropdown.component.html',
  styleUrls: ['./lesson-dropdown.component.scss']
})



export class LessonDropdownComponent implements OnInit {
  protected hideSideNav: boolean = false;
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

  toggleSideNav() {
    return this.hideSideNav = !this.hideSideNav;
  }
}
