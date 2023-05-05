import { Injectable } from '@angular/core';
import { doc, getFirestore } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataUserFireService {

  private db = getFirestore(AuthService.getApp());

  async createUserData(email: string, username: string) {
    try {
      await setDoc(doc(this.db, "users", email), {
        username: username,
        isPremium: false
      });

      console.log("Document written with ID: ", email);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

}
