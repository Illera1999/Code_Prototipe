//Clase auxiliar para los usuarios de los cursos
export class UserList {
    private name: string = "";
    private lessonsComplete: boolean[] = [];
    private challengesComplete: boolean[] = [];

    constructor(name: string, lessonsComplete: boolean[], challengesComplete: boolean[]) {
        this.name = name;
        this.lessonsComplete = lessonsComplete;
        this.challengesComplete = challengesComplete;
    }

    public getName() { return this.name }
    public getLessonsComplete() { return this.lessonsComplete }
    public getChallengesComplete() { return this.challengesComplete }

    public isSameUser(username: string) {
        return username == this.name;
    }
}