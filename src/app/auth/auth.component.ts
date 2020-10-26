import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { 
  }  

  ngOnInit(): void {
  	this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
  		() => {
  		  this.authStatus = this.authService.isAuth;
  		  this.router.navigate(['appareils']);
  		});
  }

  onSignOut(){
  	this.authService.signOut();
  	this.authStatus = this.authService.isAuth;
  }

  onSubmit(form: NgForm){
  	const name = form.value['name'];
    const password = form.value['password'];
    console.log('login=' + name + ' password='+ password);
    if( name === 'cast' && password === 'cast') {
      this.authService.signIn().then(
        () => {
          this.authStatus = this.authService.isAuth;
          this.router.navigate(['homepageCard']);
        });      
    } else {
      this.router.navigate(['auth']);
    }  
  }
}
