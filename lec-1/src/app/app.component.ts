import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lec-1';

  show = false

  students = ['Naved', 'Noman', 'Sam', 'Anas', 'tarik', 'Ashu', 'Faizan']

  studentsData = [
    { name: 'naved', age: 25, email: 'naved@gmail.com' },
    { name: 'noman', age: 22, email: 'noman@gmail.com' },
    { name: 'sam', age: 20, email: 'sam@gmail.com' },
    { name: 'anas', age: 24, email: 'anas@gmail.com' },
    { name: 'tarik', age: 26, email: 'tarik@gmail.com' },
    { name: 'ashu', age: 24, email: 'ashu@gmail.com' },
    { name: 'Potato', age: 19, email: 'potato@gmail.com' }
  ]


}
