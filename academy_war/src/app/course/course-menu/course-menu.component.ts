import { Component } from '@angular/core';

@Component({
  selector: 'app-course-menu',
  templateUrl: './course-menu.component.html',
  styleUrls: ['./course-menu.component.scss']
})
export class CourseMenuComponent {

  public vDescriotion: boolean = true;
  public vLecciones: boolean = false;
  public vChallenges: boolean = false;


  visualizar(dato: String){
    this.vDescriotion = false;
    this.vLecciones = false;
    this.vChallenges = false;
    switch(dato) {
      case "Lecciones":
        this.vLecciones = true;
        break;
      case "Challenges":
        this.vChallenges = true;
        break;
      default:
        this.vDescriotion = true;
    }  
  }


}
