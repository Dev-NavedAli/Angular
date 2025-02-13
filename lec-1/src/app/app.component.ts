import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lec-1';


  task:string = "";
  taskList:{id:number,task:string}[] = []

  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task})
    this.task =""
  }
  removeTask(taskId:number){
    this.taskList = this.taskList.filter((item)=>item.id!=taskId)
    
  }


}
