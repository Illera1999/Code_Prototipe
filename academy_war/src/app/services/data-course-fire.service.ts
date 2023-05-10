import { Injectable } from '@angular/core';
import { collection, query, getFirestore, getDocs } from "firebase/firestore";
import { AuthService } from './auth.service';
import { Course } from '../class/course'; 
import { Lesson } from '../class/lesson'; 
import { Challenge } from '../class/challenges';

export class DataCourseFireService {

  private db = getFirestore(AuthService.getApp());
  private courses: Course[] = [];
  private lessons: Lesson[] = [];
  private challenges: Challenge[] = [];

  async setAllCourse(){
    try{
      const q = query(collection(this.db,"course"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let lessons = doc.data()["lessons"];
        lessons.forEach((element: any) => {
          const auxe = new Lesson(element);
          this.lessons.push(auxe)
        });

        let challenges = doc.data()["challenges"];
        challenges.forEach((element: any) => {
          const temp = new Challenge(element);
          this.challenges.push(temp)
        });
        
        const aux = new Course (
          doc.id,
          doc.data()["name"],
          doc.data()["description"],
          doc.data()["programmingLanguage"],
          this.lessons,
          this.challenges,
          doc.data()["users"]);
        
        this.courses.push(aux);

      });
      console.log("Get collection Course");
    } catch (e) {
      console.error("Error geting document", e);
    }
    return this.courses;
  }

}
