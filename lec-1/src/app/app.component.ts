import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';


@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  counter = 0

  updateCounter(){
    this.counter+=1;
  }
  


}
