import { Challenge } from "./challenges";
import { Lesson } from "./lesson";
import { User } from "./user";

export class Course {
    private id: string = "";
    private name: string = "";
    private description: string = "";
    private programmingLanguage: string = "";
    private challenges: Challenge[] = [];
    private lessons: Lesson[] = [];
    private users: User[] = [];

    constructor(id: string, name: string, description: string, porgrammingLanguage: string, lessons: Lesson[], challenges: Challenge[], users: User[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.programmingLanguage = porgrammingLanguage;
        this.lessons = lessons;
        this.challenges = challenges;
        this.users = users;
    }

    public getId() { return this.id; }
    public getName() { return this.name; }
    public getDescription() { return this.description; }
    public getProgrammingLanguage() { return this.programmingLanguage; }
    public getChallenges() { return this.challenges; }
    public getLessons() { return this.lessons; }
    public getUsers() { return this.users; }

    public setId(id: string) { this.id = id }
    public setName(name: string) { this.name = name }
    public setDescription(id: string) { this.description = id }
    public setProgrammingLanguage(id: string) { this.programmingLanguage = id }

    public addChallenge(challenge: Challenge) {
        this.challenges.push(challenge)
        //Y añadirlo en el servicio de la BBDD
    }

    public addLesson(lesson: Lesson) {
        this.lessons.push(lesson)
        //Y añadirlo en el servicio de la BBDD
    }

    public hasAccess(user: User) { return (this.users.indexOf(user) != -1) }

}