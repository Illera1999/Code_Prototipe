import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { User } from '../class/user';
import { AuthService } from './auth.service';
import { collection, getDocs, getFirestore, query, queryEqual, where } from 'firebase/firestore';
>>>>>>> 4ad69b1ce8157b15b0d5221a6c548afbe225840d

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

<<<<<<< HEAD
  constructor() { }
=======
  private db = getFirestore(AuthService.getApp());
  private user: User | undefined;

  constructor() { }

  async getSubscriptionFromUser(username: string) {
    try {
      const q = query(collection(this.db, "subscription"), where("user", "==", username));
      const querySnapshot = await getDocs(q);

      return querySnapshot;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }
>>>>>>> 4ad69b1ce8157b15b0d5221a6c548afbe225840d
}
