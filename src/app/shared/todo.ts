export class Todo {
    // title: string;
    // completed: boolean;

    // constructor(title: string, completed: boolean = false) {
    //   this.title = title;
    //   this.completed = completed;
    // }

    // сокращенная запись того же:
    constructor(public title: string,
                public completed: boolean = false) {}
}