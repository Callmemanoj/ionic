import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class tokenservice{
    public getToken():string{
        let str = window.localStorage.getItem("login_details");
        let obj = JSON.parse(str);
        return obj.token;
    };

};