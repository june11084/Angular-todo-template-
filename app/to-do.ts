export class Task {
  done: boolean = false;
  id: number = tasks.length;

  constructor(public description: string, public priority: string){
    this.id = tasks.length;
  }

  markDone(){
    this.done = true;
  }
  addTask(description, priority){
    tasks.push(new Task(description, priority));
  }

}
var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));
