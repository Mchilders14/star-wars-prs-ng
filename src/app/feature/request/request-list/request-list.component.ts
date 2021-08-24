import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { Request } from '../../../model/request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  title: string= 'Request List';
  requests: Request[]= [];
  loggedInUser: User = new User();

  constructor(
    private requestSvc: RequestService,
    private systemService: SystemService
  ) { }

  ngOnInit(): void {
    this.systemService.checkLogin();
    this.loggedInUser = this.systemService.loggedInUser;
    this.requestSvc.list()
    .subscribe(
      resp => {
        this.requests = resp as Request[];
        console.log("list of requests: ", this.requests);
      },
      err => {
        console.log(err);
      }
    );
  }

}