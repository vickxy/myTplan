import { ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { EmpService } from './employee.services';


@Injectable()
export class AuthGuard implements CanActivate{
	constructor(private empService:EmpService, private router:Router){}

	public isLoggedIn:number=0;
	canActivate(route:ActivatedRouteSnapshot,
				state:RouterStateSnapshot){

		/*return this.empService.authInfo
			.map(authInfo=>authInfo.isLoggedIn())
			.take(1)
			.do(allowed=>{
				if(!allowed){
					this.router.navigate(['/login'])
				}
			});*/
		return this.checkLogin();
	}
	
	checkLogin():boolean{
		this.isLoggedIn = +localStorage.getItem('loginStatus');
		console.log("check guard");
		console.log(+localStorage.getItem('loginStatus'));
		if(this.isLoggedIn == 1 || this.isLoggedIn == 2){
			return true;
		}else{
			this.router.navigate(['/login'])
		}
	}
}