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
  private lessons: Lesson[] = [];

  async setAllCourse() {
    try {
      const q = query(collection(this.db, "course"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let lessons = doc.data()["lessons"];
        lessons.forEach((element: any) => {
          const auxe = new Lesson(element);
          this.lessons.push(auxe)
        });

        const aux = new Course(
          doc.id,
          doc.data()["name"],
          doc.data()["description"],
          doc.data()["programmingLanguage"],
          this.lessons,
          doc.data()["challenges"],
          doc.data()["users"]);

        this.courses.push(aux);

      });
      console.log("Get collection Course");
    } catch (e) {
      console.error("Error geting document", e);
    }
    return this.courses;
  }


  async getParticularCourse(courseId: string) {
    let res = null;
    await this.setAllCourse().then((cursos) => {
      cursos.forEach((c) => { if (c.getId() == courseId) res = c; })
    });
    return res;
  }
}
