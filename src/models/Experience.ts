export default class Experiences {
    id?: number;
    name: string;
    describe: string;
    tasks: Array<string>;

    constructor(
        id: number,
        name: 'name',
        describe: 'description',
        tasks: Array<string> = [''],
    ){
        this.id = id;
        this.name = name;
        this.describe = describe;
        this.tasks = tasks;
    }

}