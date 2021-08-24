import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { Vendor } from 'src/app/model/vendor.class';
import { SystemService } from 'src/app/service/system.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];
  loggedInUser: User = new User();

  constructor(
    private vendorSvc: VendorService,
    private systemService: SystemService
  ) { }

  ngOnInit(): void {
    this.systemService.checkLogin();
    this.loggedInUser = this.systemService.loggedInUser;
    this.vendorSvc.list().subscribe(
      resp => {
        this.vendors= resp as Vendor[];
      },
      err => {
        console.log(err);
      } 
    );
  }

}
