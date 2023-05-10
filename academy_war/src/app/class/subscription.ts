import { User } from "./user";

export class Subscription {
    private id: string = "";
    private date: Date = new Date();
    private isActive: boolean = false;
    private price: number = 0.0;
    private username: string;
    private course: string;


    constructor(id: string, isActive: boolean, price: number, username: string, course: string) {
        this.id = id;
        this.isActive = isActive;
        this.price = price;
        this.username = username;
        this.course = course;
    }

    public getId() { return this.id }
    public getDate() { return this.date }
    public getIsActive() { return this.isActive }
    public getPrice() { return this.price }
    public getUsername() { return this.username }
    public getCourse() { return this.course }

    public setId(id: string) { this.id = id }
    public setIsActive(isActive: boolean) { this.isActive = isActive }
    public setPrice(price: number) { this.price = price }

}