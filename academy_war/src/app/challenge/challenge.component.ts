import { Component } from '@angular/core';
import { Challenge } from '../class/challenges';
import { Course } from '../class/course';
import { DataCourseFireService } from '../services/data-course-fire.service';
import { ModalService } from '../services/modal.service';
//import {MatDialog, MatDialogConfig} from "@angular/material";
import { ChallengeDialogComponent } from './challenge-dialog/challenge-dialog.component';
import { interval } from 'rxjs';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss']
})
export class ChallengeComponent {
  course: Course[] = [];
  challenge: Challenge[] = new Array(1);
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  interval: any;
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
            
            console.log(this.challenge[0].getCode())
            this.code = this.challenge[0].getCode();
            //this.code = '#include <stdio.h>\n \tint main() {\n\tprintf(" #### "); \n\t///////Keep printing your C here\n }';
            
          }
        }
      }
    })
    
    
  }

  editorOptions = { theme: 'vs-dark', language: 'c' };
  

  ngOnInit() {
    this.startTimer();
  }


  evaluateChallenge(){
    this.pauseTimer();
    this.dialog.openDialog(ChallengeDialogComponent, '200', '200', this.getScore());
  }

  getSeconds() {
    if (this.seconds < 10) {
      return '0' + this.seconds;
    }
    return this.seconds;
  }

  getMinutes() {
    if (this.minutes < 10) {
      return '0' + this.minutes;
    }
    return this.minutes;
  }

  getHours() {
    if (this.hours < 10) {
      return '0' + this.hours;
    }
    return this.hours;
  }

  getScore() :string {
    return String(this.hours*3600 + this.minutes*60 + this.seconds);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.seconds == 59) {
        this.seconds = 0;
        if (this.minutes == 59) {
          this.minutes = 0;
          if (this.hours == 59) {
            this.hours = 0
          } else {
            this.hours += 1;
          }
        } else {
          this.minutes += 1;
        }
      } else {
        this.seconds += 1;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
