import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { AuthService } from './auth.service';
import { collection, getDocs, getFirestore, query, queryEqual, where } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

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
}
