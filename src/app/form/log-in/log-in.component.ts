import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.services';
import { Employee } from '../../empLogin';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(
    private empService: EmpService,
     private router: Router) { }

  ngOnInit() {
  }


test_status: any;
id: number;
error:String;
model = new Employee();
  login(){
      this.empService
        .login(this.model)
        .subscribe(result => {
          //this.test_status = result;
          if(result === false){
            this.error = 'Username or password is incorrect';
          }else{
            this.error = 'You have logged-in succefully';
          }
      } )
   console.log(this.error);
  }
}