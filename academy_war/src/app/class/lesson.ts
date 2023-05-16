export class Lesson {

    private id: string;
    private title: string;
    private description: string;
    private stage: string;
    private userCompleted: string[];

    constructor(datos: any) {

        let data = datos.datos
        this.userCompleted = data.usersCompleted;
        this.id = data.id
        this.title = data.title
        this.description = data.description
        this.stage = data.stage
    }

    public getId() { return this.id; }
    public getTitle() { return this.title; }
    public getDescription() { return this.description; }
    public getStage() { return this.stage; }
    public getusersCompleted() { return this.userCompleted; }
}