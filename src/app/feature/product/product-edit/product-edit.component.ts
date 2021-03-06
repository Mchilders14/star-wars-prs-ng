import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title: string= 'Product Edit';
  product: Product= new Product();
  productId: number= 0;
  vendors: Vendor[]= [];
  
  constructor(
    private productSvc: ProductService,
    private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => this.productId = parms["id"]);
    console.log('productId= '+this.productId);
    this.productSvc.get(this.productId).subscribe(
      resp => {
          this.product= resp as Product;},
      err => {console.log(err);}        
    );

    this.vendorSvc.list()
    .subscribe(
      resp => {
        this.vendors = resp as Vendor[];
      },
      err => {
        console.log(err);
      }
    );  

  }

  save() {
    this.productSvc.create(this.product).subscribe(
      resp => {this.product= resp as Product;
              this.router.navigateByUrl('/product-list')},
      err => {console.log(err);}
    );

  }

  delete() {
    this.productSvc.delete(this.productId).subscribe(
      resp => {
        this.product = resp as Product;
        this.router.navigateByUrl('/product-list');
      },
      err => {console.log(err)}
    );
  }

  compVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }

}