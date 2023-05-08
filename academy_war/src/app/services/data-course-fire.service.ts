import { Injectable } from '@angular/core';
import { collection, query, getFirestore, getDocs } from "firebase/firestore";
import { AuthService } from './auth.service';
import { Course } from '../class/course'; 
import { Lesson } from '../class/lesson'; 

@Injectable({
  providedIn: 'root'
})
export class DataCourseFireService {

  private db = getFirestore(AuthService.getApp());
  private courses: Course[] = [];

  async setAllCourse(){
    try{
      const q = query(collection(this.db,"course"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const aux = new Course (
          doc.id,
          doc.data()["name"],
          doc.data()["description"],
          doc.data()["programmingLanguage"],
          new Lesson(doc.data()["lessons"].id,doc.data()[""]),
          doc.data()["challenges"],
          doc.data()["users"]);
        
        this.courses.push(aux);

        ////console.log(doc.id, " => ", doc.data()["name"]);
      });
      console.log("Get collection Course");
    } catch (e) {
      console.error("Error geting document", e);
    }
    return this.courses;
  }

}
