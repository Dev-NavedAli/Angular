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

  display = true
  toggleDiv = true

  hide() {
    this.display = false
  }

  show(){
    this.display = true;
  }

  toggle(){
    this.display = !this.display
  }

  toggleDiv2(){
    this.toggleDiv = !this.toggleDiv
  }

}