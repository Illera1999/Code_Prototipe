import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-course-menu',
  templateUrl: './course-menu.component.html',
  styleUrls: ['./course-menu.component.scss']
})
export class CourseMenuComponent {

  @Output() miEvento = new EventEmitter<vMenu>();
/* 
  @Output() public vMenu = {
    "description":false,
    "lessons":false,
    "challenges":false
  };

 */

  var: vMenu = {
    challenges: false,
    description: false,
    lessons: false
  };


  visualizar(dato: string){
    this.var.description = false;  
    this.var.lessons = false;  
    this.var.challenges = false;  
    switch(dato) {
      case "Lessons":
        this.var.lessons = true;
        this.isActive(dato);
        break;
      case "Challenges":
        this.var.challenges = true;
        this.isActive(dato) 
        break;
      default:
        this.var.description = true;
        this.isActive(dato) 
        break;
    }  
    this.miEvento.emit(this.var)
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

export interface vMenu{
  description: boolean,
  lessons: boolean,
  challenges: boolean
}