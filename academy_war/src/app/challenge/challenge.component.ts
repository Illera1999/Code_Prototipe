import { Component } from '@angular/core';
import { Challenge } from '../class/challenges';
import { Course } from '../class/course';
import { DataCourseFireService } from '../services/data-course-fire.service';
import { ModalService } from '../services/modal.service';
//import {MatDialog, MatDialogConfig} from "@angular/material";
import { ChallengeDialogComponent } from './challenge-dialog/challenge-dialog.component';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent {
  course: Course[] = [];
  challenge: Challenge[] = new Array(1);
  code: string = "";
  protected description : any;
  constructor(private db: DataCourseFireService, private dialog: ModalService) {
    let challengeName = document.location.href.split("/").pop()?.replaceAll("%20", " ");
    db.getParticularCourse("Course C").then((data: Course | null) => {
      if (data != null) {
        this.course[0] = data;
        for (let i = 0; i < data.getChallenges().length; i++) {
          if (data.getChallenges()[i].getTitle() == challengeName) {
            this.challenge[0] = data.getChallenges()[i];
            this.code = this.challenge[0].getCode();
            console.log(this.challenge[0])
          }
        }
      }
    })
    
    
  }

  editorOptions = { theme: 'vs-dark', language: 'c' };
 

  evaluateChallenge(){
  
    this.dialog.openDialog(ChallengeDialogComponent, '200', '200');
  }
}
