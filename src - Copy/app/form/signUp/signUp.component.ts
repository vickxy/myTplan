import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../employee.services';
import { Employee } from '../../employee';
import {ActivatedRoute, Params, Router} from '@angular/router';
@Component({
  selector: 'sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class signUpComponent implements OnInit {

  constructor(
    private empService: EmpService,
     private router: Router) { }

  ngOnInit() {
  }

model = new Employee();
  addEmployee(){
  	console.log("addEmp called");
      this.empService
        .addEmployee(this.model)
        .subscribe(()=> this.goBack());
        console.log(this.model.firstName, this.model.lastName, this.model.username, this.model.password);
        //console.log(this.model.userName);
  }
   goBack(){
    this.router.navigate(['/home']);
  }
}
