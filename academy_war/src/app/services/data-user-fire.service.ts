import { Injectable } from '@angular/core';
import { doc, getFirestore } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { AuthService } from './auth.service';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class DataUserFireService {

  private db = getFirestore(AuthService.getApp());
  private user: User | undefined;

  async createUserData(email: string, username: string) {
    try {
      await setDoc(doc(this.db, "users", email), {
        username: username,
        isPremium: false
      }).then(() => {
        localStorage.setItem("user", JSON.stringify({ id: email, username: username }))
        window.location.reload()
      });

      console.log("Document written with ID: ", email);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  getLocalUserEmail() {
    let stg = localStorage.getItem("user")
    if (stg) return JSON.parse(stg)['id']
    return undefined;
  }

  getUser() {
    return this.user;
  }

}
