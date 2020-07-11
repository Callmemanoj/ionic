import { Component, OnInit } from "@angular/core";
import { logOutService } from "./logout.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-logout",
  templateUrl: "./logout.page.html",
  styleUrls: ["./logout.page.scss"],
})
export class LogoutPage implements OnInit {
  constructor(public service: logOutService, public router: Router) {}

  ngOnInit() {
    this.service.logout().subscribe(
      (posRes) => {
        this.router.navigate(["/login"]);
      },
      (errRes) => {
        if (errRes.error instanceof Error) {
          console.log("Client Side Error");
        } else {
          console.log("Server Side Error");
        }
      }
    );
  }
}
