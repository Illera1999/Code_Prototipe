import { Component } from '@angular/core';

@Component({
  selector: 'app-course-menu',
  templateUrl: './course-menu.component.html',
  styleUrls: ['./course-menu.component.scss']
})
export class CourseMenuComponent {

  public vDescription: boolean = true;
  public vLessons: boolean = false;
  public vChallenges: boolean = false;


  visualizar(dato: string){
    this.vDescription = false;
    this.vLessons = false;
    this.vChallenges = false;
    switch(dato) {
      case "Lessons":
        this.vLessons = true;
        this.isActive(dato);
        break;
      case "Challenges":
        this.vChallenges = true;
        this.isActive(dato) 
        break;
      default:
        this.vDescription = true;
        this.isActive(dato) 
        break;
    }  
  }

  public isActive(id: string){
    let elements = document.getElementsByClassName("active");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
    let element = document.getElementById(id);
      element?.classList.add("active");    
  }
  

}
