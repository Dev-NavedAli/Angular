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

  name = ""
  displayName=""
  email=""

  getName(event: any) {
    this.name = (event.target.value)
  }

  showName(){
    this.displayName=this.name
  }

  setName(){
    this.name ='hello'
  }

  getEmail(val:string){
    this.email=val
    
  }
  setEmail(val:string){
    this.email='val'
    
  }
  
}