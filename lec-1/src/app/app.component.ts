import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  tittle='Naved Ali Khan'
  tittle2='NAVED ALI KHAN'
  tittle3='NAVED ALI KHAN'

  date= new Date()

  amount:number=10


}
