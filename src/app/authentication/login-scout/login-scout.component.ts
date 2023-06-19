import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-scout',
  templateUrl: './login-scout.component.html',
  styleUrls: ['./login-scout.component.scss']
})
export class LoginScoutComponent {
constructor(private router: Router) {
}
btnfunc_13963(){
	this.router.navigate(['/core/createschedule']);
}

btnfunc_13959(){
	this.router.navigate(['/modules/microsoft']);
}
}
