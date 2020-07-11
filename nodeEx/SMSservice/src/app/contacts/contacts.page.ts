import { Component, OnInit } from "@angular/core";

import { contactService } from "./contacts.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { logOutService } from "../logout/logout.service";
@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.page.html",
  styleUrls: ["./contacts.page.scss"],
})
export class ContactsPage implements OnInit {
  constructor(
    public service: contactService,
    public route: Router,
    public getout: logOutService
  ) {}
  public contacts(data: any): any {
    return this.service.contact(data).subscribe(
      (posRes) => {
        if (posRes.contacts == "updated") {
          console.log("Updated Successfully");
          this.route.navigate(["/login"]);
        }
      },
      (errRes: HttpErrorResponse) => {
        if (errRes.error instanceof Error) {
          console.log("Client Side Error");
        } else {
          console.log("Server Side Error");
        }
      }
    );
  }
  public exit(): any {
    return this.getout.logout().subscribe(
      (posRes) => {
        if (posRes.logout == "success") {
          window.localStorage.removeItem("user_register");
          this.route.navigate(["/home"]);
        }
      },
      (errRes: HttpErrorResponse) => {
        if (errRes.error instanceof Error) {
          console.log("Client Side Server");
        } else {
          console.log("Server Side Error");
        }
      }
    );
  }
  ngOnInit() {}
}
