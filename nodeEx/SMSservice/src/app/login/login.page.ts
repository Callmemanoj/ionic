import { Component, OnInit } from '@angular/core';
import { loginService } from './login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(public service:loginService, public router:Router) { }
  public login(data:any){
    this.service.authenticate(data).subscribe((posRes)=>{
      if(posRes.login=="Success"){
        let str= JSON.stringify(posRes);
        window.localStorage.setItem("user_register",str);
        this.router.navigate(["/contacts"]);
      }
      else{
        alert("Login Fail");
      }
    },(errRes:HttpErrorResponse)=>{
      if(errRes.error instanceof Error){
        console.log("Client Side Error");
      }
      else{
        console.log("Server Side Error");
      }
    })
  }
  ngOnInit() {
    
  }

}
