import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.services';
import { Employee } from '../../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private empService: EmpService,
     private router: Router) { }

  ngOnInit() {
  	this.logout();
  }
  var:string;
  logout(){
  	this.empService.logout();
  }
}
