import { Challenge } from "./challenges";
import { Lesson } from "./lesson";
import { User } from "./user";
import { UserList } from "./userList";

export class Course {
    private id: string = "";
    private name: string = "";
    private description: string = "";
    private programmingLanguage: string = "";
    private price: number = 0;
    private challenges: Challenge[] = [];
    private lessons: Lesson[] = [];
    private users: UserList[] = [];

    constructor(id: string, name: string, description: string,
        porgrammingLanguage: string, lessons: Lesson[],
        challenges: Challenge[], users: [], price: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.programmingLanguage = porgrammingLanguage;
        this.lessons = lessons;
        this.challenges = challenges;
        this.users = users;
        this.price = price;
    }

    public getId() { return this.id; }
    public getName() { return this.name; }
    public getDescription() { return this.description; }
    public getProgrammingLanguage() { return this.programmingLanguage; }
    public getChallenges() { return this.challenges; }
    public getLessons() { return this.lessons; }
    public getUsers() { return this.users; }
    public getPrice() { return this.price }

    public setId(id: string) { this.id = id }
    public setName(name: string) { this.name = name }
    public setDescription(id: string) { this.description = id }
    public setProgrammingLanguage(id: string) { this.programmingLanguage = id }
    public setPrice(price: number) { this.price = price }

    public addChallenge(challenge: Challenge) { this.challenges.push(challenge) }
    public addLesson(lesson: Lesson) { this.lessons.push(lesson) }
    public addUser(user: User) {
        let lessonsComplete = [];
        for (let i = 0; i <= this.lessons.length; i++) lessonsComplete.push(false);
        let challengesComplete = [];
        for (let i = 0; i <= this.challenges.length; i++) challengesComplete.push(false);
        this.users.push(new UserList(user.getUsername(), lessonsComplete, challengesComplete))
    }

    public hasAccess(user: User) {
        for (let u of this.users) {
            if (u.isSameUser(user.getUsername())) return true;
        }
        return false;
    }

}