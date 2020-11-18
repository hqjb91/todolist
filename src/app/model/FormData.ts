export class FormData {

    public completed:boolean = false;
    public toEdit:boolean = false;

    constructor(
        public desc: string,
        public priority: string,
        public duedate: Date,
        public taskID: number
    ){}
};