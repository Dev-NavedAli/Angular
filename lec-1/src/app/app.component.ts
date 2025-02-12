import { Component, effect, signal } from '@angular/core';
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

  count  = signal(10)
  x= 20;

  constructor(){
    effect(()=>{
      console.log(this.count());
    })
  }

  updateValue(){
    this.count.set(this.count()+1)    
  }

}