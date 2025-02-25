import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() counter=0

  // constructor(){
  //   console.log('constructor');
  // }

  // ngOnInit(){
  //   console.log('ngOnInit called')
  // }
  // ngOnDestroy(){
  //   console.log('destroy called'); 
  // }

  ngOnChanges(){
    console.log('onChanges called');
    
  }

}
