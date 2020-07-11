import { Injectable } from "@angular/core";
import { HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import { tokenservice } from "../services/token.service"
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class authFilter{
    constructor( public service:tokenservice){}
    interceptor(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        if(req.url === "http://localhost:5000/register"){
            return handler.handle(req);
        }
        else if(req.url==="http://localhost:5000/login"){
            return handler.handle(req);
        }
        else{
            const req1 = req.clone({
                setHeaders :{
                    token:this.service.getToken()
                }
            });
            return handler.handle(req1);
        }
    }

}