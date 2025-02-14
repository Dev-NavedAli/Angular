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


  bgColor = "red"
  todoTrue = "red"
  size="40"
  todoFalse = "green"


  todo=false

  updateColor(){
    this.todo = !this.todo
  }


}
