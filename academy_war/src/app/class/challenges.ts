import { Stage } from "./stage";

export class Challenge {
    private id: string = "";
    private title: string = "";
    private description: string = "";
    private executionTime: Date = new Date();
    private durationTime: Date = new Date();
    private score: number = 0;
    private stage: Stage = Stage.HIGH;

    constructor(id: string, title: string, description: string, score: 0, stage: Stage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.score = score;
        this.stage = stage;
    }

    public getId() { return this.id }
    public getTitle() { return this.title }
    public getDescription() { return this.description }
    public getExecutionTime() { return this.executionTime }
    public getDurationTime() { return this.durationTime }
    public getScore() { return this.score }
    public getStage() { return this.stage }


}