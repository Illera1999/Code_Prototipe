import { Title } from "@angular/platform-browser";
import { Stage } from "./stage";

export class Challenge {
    private id: string;
    private title: string;
    private description: string;
    //private executionTime: Date = new Date();
    //private durationTime: Date = new Date();
    private score: number;
    private stage: string;
    private code: string;


    constructor(datos: any) {
        let data = datos.datos

        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.score = data.score;
        this.stage = data.stage;
        this.code = data.code;
    }

    public getId() { return this.id }
    public getTitle() { return this.title }
    public getDescription() { return this.description }
    //public getExecutionTime() { return this.executionTime }
    //public getDurationTime() { return this.durationTime }
    public getScore() { return this.score }
    public getStage() { return this.stage }
    public getCode() {return this.code}

    public setId(id: string) { this.id = id }
    public setTitle(title: string) { this.title = title }
    public setDescription(description: string) { this.description = description }
    //public setExecutionTime(executionTime: Date) { this.executionTime = executionTime; }
    //public setDurationTime(durationTime: Date) { this.durationTime = durationTime }
    public setScore(score: number) { this.score = score }
    public setStage(stage: Stage) { this.stage = stage }
    public setCode(code: string) { this.code = code }
}