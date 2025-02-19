import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms'



@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lec-1';

  name = new FormControl();
  password = new FormControl();

  displayValue(){
    console.log(this.name.value);
    console.log(this.password.value);
  }

}
