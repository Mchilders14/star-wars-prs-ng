import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { User } from 'src/app/model/user.class';
import { ProductService } from 'src/app/service/product.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title:string = "Product-List";
  products: Product[] = [];
  loggedInUser: User = new User();

  constructor(
    private productSvc: ProductService,
    private systemService: SystemService
  ) { }

  ngOnInit(): void {
    this.systemService.checkLogin();
    this.loggedInUser = this.systemService.loggedInUser;
    this.productSvc.list().subscribe(
      resp => {
        this.products= resp as Product[];
      },
      err => {
        console.log(err);
      } 
    );
  }

}
