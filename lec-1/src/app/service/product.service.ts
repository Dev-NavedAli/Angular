import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  

  getProductData(){
    return [
      {name:'mobile',brand:'samsung',price:'20000'},
      {name:'laptop',brand:'Dell',price:'29000'},
      {name:'Tablet',brand:'Lenovo',price:'15000'}
    ]
  }

}
