import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class registerService{
    constructor(public http:HttpClient){ }
    public insertion(data:any) :Observable<any>{
        return this.http.post("http://localhost:5000/register",data);
    }

}