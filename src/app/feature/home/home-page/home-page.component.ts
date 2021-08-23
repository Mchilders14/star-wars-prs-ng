import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  loggedInUser: User = new User();


  constructor(
    private systemService: SystemService
  ) { }

  ngOnInit(): void {
    //this.systemService.checkLogin();
    this.loggedInUser = this.systemService.loggedInUser;
  }

}
