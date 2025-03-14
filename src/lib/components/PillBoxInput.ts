import Input from "./Input";

export enum PillBoxOrientation {
    HORIZONTAL = 0,
    VERTICAL = 1
}

export default class PillBoxInput extends Input {
    
    public options: string[];
    public values: any[];
    public orientation: PillBoxOrientation;
    declare value: number;
    declare defaultValue: number;
    declare type: string;

    constructor(required: boolean, questionText: string, helpText: string, defaultValue: number, id: string, options: string[], values: any[], orientation: PillBoxOrientation, uid: number) {
        super(required, questionText, helpText, defaultValue, id, uid);
        this.options = options;
        this.values = values;
        this.orientation = orientation;
        this.type = "pillbox";
        this.value = defaultValue;
        console.log(this.value)
    }

    updateValue(index: number) {
        this.value = index;
    }

}