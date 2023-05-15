import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../styles.scss']
})

export class HomeComponent {
  constructor(protected router: Router) { }
  future_courses: FutureCourses[] = [
    {
      course_name: 'Learn Everything from Angular',
      course_description: 'Angular is a platform for building mobile and desktop web applications.',
      course_image: 'https://angular.io/assets/images/logos/angular/angular.svg'
    }, {
      course_name: 'React from Zero to Hero',
      course_description: 'React is a JavaScript library for building user interfaces.',
      course_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
    }, {
      course_name: 'Vue like a Pro',
      course_description: 'Vue.js is an open-source front end JavaScript framework for building user interfaces and single-page applications.',
      course_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    }, {
      course_name: 'Node from the beginning',
      course_description: 'Node.js is a back-end JavaScript runtime environment that executes JavaScript code outside a web browser.',
      course_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png'
    }, {
      course_name: 'Python from Zero to Hero',
      course_description: 'Python is an interpreted, high-level and general-purpose programming language.',
      course_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'
    },
  ]
}


export interface FutureCourses {
  course_name: string;
  course_description: string;
  course_image: string;
}
