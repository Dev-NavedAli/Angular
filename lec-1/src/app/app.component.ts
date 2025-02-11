import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  count = 0

  handleIncreement() {
    this.count += 1
  }
  handleDecreement() {
    if (this.count > 0) {
      this.count -= 1
    }
  }
  handleReset() {
    this.count = 0
  }

}