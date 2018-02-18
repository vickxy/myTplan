import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/*
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private empService:EmpService) { }
  status:boolean;
  ngOnInit() {
  	//this.status = this.empService.navCheck();
  	this.check();
  }
  check(){
  	if(+localStorage.getItem('id') > 0){
  		this.status = true;
  	}else{
  		this.status = false;
  	}
  	console.log("this is navbar");
  	console.log(+localStorage.getItem('id'));
  }
}
*/
