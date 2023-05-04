import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { doc, getFirestore } from "firebase/firestore";
import { setDoc } from "firebase/firestore";



@Injectable({
  providedIn: 'root'
})
export class DataUserFireService {

  private static app = initializeApp(environment.firebaseConfig);
  private db = getFirestore(DataUserFireService.app);

  async createUserData(email: string, userName: string){
    try {
      await setDoc(doc(this.db, "users", email), {
      userNmae: userName,
      isPremium: false
    });

    console.log("Document written with ID: ", email);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
}
