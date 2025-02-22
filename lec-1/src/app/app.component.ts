import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from './pipe/currency-convertor.pipe';



@Component({
  selector: 'app-root',
  imports: [CurrencyConvertorPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  amount=10


}
