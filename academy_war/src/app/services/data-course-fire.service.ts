import { Injectable } from '@angular/core';
import { collection, query, getFirestore, getDocs } from "firebase/firestore";
import { AuthService } from './auth.service';
import { Course } from '../class/course';
import { Lesson } from '../class/lesson';
import { Challenge } from '../class/challenges';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataCourseFireService {

  private db = getFirestore(AuthService.getApp());
  private courses: Course[] = [];
  private lessons: Lesson[] = [];
  private challenges: Challenge[] = [];

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
        let challenges = doc.data()["challenges"];
        challenges.forEach((element: any) => {
          const auxe2 = new Challenge(element);
          this.challenges.push(auxe2)
        });

        const aux = new Course(
          doc.id,
          doc.data()["name"],
          doc.data()["description"],
          doc.data()["ProgrammingLanguage"],
          this.lessons,
          this.challenges,
          doc.data()["users"],
          doc.data()["price"],);

        this.courses.push(aux);
        this.lessons = []
        this.challenges = []
      });
      console.log("Get collection Course-------------------------------------");
    } catch (e) {
      console.error("Error geting document", e);
    }
    return this.courses;
  }


  async getParticularCourse(courseId: string): Promise<Course | null> {
    let res = null;
    await this.setAllCourse().then((cursos) => {
      cursos.forEach((c) => { if (c.getId() == courseId) res = c; })
    });
    return res;
  }

}
