import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent, SignupComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lec-1';

  heros = ['Thor', 'hulk', 'tony', 'captain America', 'wanda']

  students = [
    { name: 'Naved Ali Khan', age: 25, email: "nomanali50997@gmail.com" },
    { name: 'Noman Ali Khan', age: 23, email: "noman@gmail.com" },
    { name: 'Fareed Ali Khan', age: 24, email: "Devnoman@gmail.com" },
    { name: 'Sarwaz Ali Khan', age: 26, email: "sarwaz@gmail.com" },
    { name: 'Taqee Ali Khan', age: 19, email: "TaqeeOLp@gmail.com" }
  ]

  getName(val: string) {
    console.log(val);
  }

}