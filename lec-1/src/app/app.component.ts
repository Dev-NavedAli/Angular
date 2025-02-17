import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lec-1';

  users = [
    {name:'Naved',id:1,age:24},
    {name:'Noman',id:2,age:24},
    {name:'Tarik',id:3,age:24},
    {name:'Anas',id:4,age:24},
    {name:'Ashu',id:5,age:24},
  ]
}
