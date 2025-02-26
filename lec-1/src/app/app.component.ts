import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { ProductsService } from './service/products.service';

@Component({
  selector: 'app-root',
  imports: [UserComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // ✅ Fixed from styleUrl to styleUrls
})
export class AppComponent {

  constructor(private productService: ProductsService) { }

  productList: any;

  getProductsData() {
    this.productService.getProductList().subscribe((data: any) => {
      console.log(data);
      this.productList = data.products
    });
    console.log(this.productList);

  }

}
