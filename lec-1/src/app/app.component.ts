import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'



@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lec-1';

  profileForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
  })

  onSubmit() {
    console.log('Onsubmit Called', this.profileForm.value);
  }

  setValue() {
    this.profileForm.setValue({
      name: "Noman",
      password: "321",
      email: "noman@50997gmail.com",
    })
  }
}
