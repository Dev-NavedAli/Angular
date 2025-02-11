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

  handleEvent(event:any){
    console.log("Click Event are here : ",event)
  }

  MouseEvent(event:any){
    console.log("Mouse Event are here : ",event)
  }

  inputEvent(event:any){
    console.log("Input Event : ",(event.target.value));
    
  }

}