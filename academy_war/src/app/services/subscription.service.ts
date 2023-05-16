import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { doc, collection, setDoc, getDocs, getFirestore, query, where, updateDoc, serverTimestamp } from 'firebase/firestore';
import { Subscription } from '../class/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private db = getFirestore(AuthService.getApp());

  constructor() { }

  async getSubscriptionFromUser(username: string): Promise<Subscription[]> {
    let sub: Subscription[] = [];
    try {
      const q = query(collection(this.db, "subscription"), where("user", "==", username));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let s = doc.data()
        sub!.push(new Subscription(s['id'], s['isActive'],
          s['price'], s['user'], s['course']))
      })
    } catch (e) {
      console.log(e);
    }
    return sub;
  }

  async isUserSubscribe(user: string, course: string) {
    let res = false;
    await this.getSubscriptionFromUser(user).then((data: Subscription[]) => {
      data.forEach((s: Subscription) => {
        if (s.getCourse() == course && s.getIsActive())
          res = true;
      })
    })
    return res;
  }

  async createSubscription(user: string, course: String) {
// Add a new document in collection "cities"
    await setDoc(doc(this.db, "subscription", user+":"+course), {
      isActive: false,
      course: course,
      user: user
    });
  }

  async activateSubscription(user: string, course: String){
    const q = doc(this.db, "subscription", user+":"+course);
    
    await updateDoc(q, {
      isActive: true,
      startDate: serverTimestamp()
    });
  }
}
