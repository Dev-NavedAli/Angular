import { Component, computed, effect, signal, WritableSignal } from '@angular/core';
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


  count = signal(0)
  displayHeading = false

  constructor(){
    effect(()=>{
      if(this.count()==2){
        this.displayHeading = true
        setTimeout(()=>{
          this.displayHeading = false
        },2000)
      }else{
        this.displayHeading = false
      }
    })
  }

}