import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ProductService } from './service/product.service';


@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private productService: ProductService) { }

  productData: any; 

  getProductData() {
    this.productData = this.productService.getProductData()
  }



}
