import { Course } from "./course";
import { Subscription } from "./subscription";

export class User {
    private isPremium: boolean | undefined = false;
    private username: string = "";
    private id: string = "";
    private courses: Course[] = [];
    private subscriptions: Subscription[] = [];

    constructor(id: string, username: string, courses: Course[],
        subscriptions: Subscription[], isPremium?: boolean) {
        this.id = id;
        this.username = username;
        this.isPremium = isPremium;
        this.subscriptions = subscriptions;
        this.courses = courses;
    }

    getUsername() { return this.username; }
    getId() { return this.id; }
    isUserPremium() { return this.isPremium; }
    getSubscriptions() { return this.subscriptions; }

    setId(id: string) { this.id = id }
    setUsername(username: string) { this.username = username }
    setIsPremium(isPremium: boolean) { this.isPremium = isPremium }
    addSubscription(subscription: Subscription) {
        if (this.subscriptions) this.subscriptions.push(subscription)
    }
}