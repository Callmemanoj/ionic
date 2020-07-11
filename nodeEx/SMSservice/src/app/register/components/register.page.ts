import { Component, OnInit } from '@angular/core';
import { registerService } from '../service/register.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public service:registerService, public router:Router) { }
  public register(data:any):any{
    this.service.insertion(data).subscribe((posRes)=>{
      if(posRes.register == "success")
      {
        console.log("REgistration Success");
        this.router.navigate(["/login"]);
      }
      else{
        alert("Registration Failed");
      }
    },(errRes:HttpErrorResponse)=>{
      if(errRes.error instanceof Error)
      {
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
