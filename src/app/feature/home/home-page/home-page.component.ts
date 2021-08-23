import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private systemService: SystemService
  ) { }

  ngOnInit(): void {
    this.systemService.checkLogin();
  }

}
