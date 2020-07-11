// import { Component, OnInit } from "@angular/core";
// import { logOutService } from "../logout/logout.service";
// import { loginService } from "../login/login.service";
// import { Router } from "@angular/router";
// import { HttpErrorResponse } from "@angular/common/http";

// @Component({
//   selector: "app-dashboard",
//   templateUrl: "./dashboard.page.html",
//   styleUrls: ["./dashboard.page.scss"],
// })
// export class DashboardPage implements OnInit {
//   public user: any;
//   constructor(
//     public service: logOutService,
//     public router: Router,
//     public inservice: loginService
//   ) {}
//   public logouto(): any {
//     this.service.logout().subscribe((posRes) => {
//       if (posRes.logout == "success") {
//         window.localStorage.removeItem("user_register");
//         this.router.navigate(["/"]);
//       }

//       (errRes: HttpErrorResponse) => {
//         if (errRes.error instanceof Error) {
//           console.log("Client Side Error");
//         } else {
//           console.log("Server Side Error");
//         }
//       };
//     });
//   }

//   ngOnInit() {}
// }

import { Component } from "@angular/core";
import { logOutService } from "../logout/logout.service";
import { loginService } from "../login/login.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage {
  public user: any;
  constructor(
    public service: logOutService,
    public router: Router,
    public inservice: loginService
  ) {}
  public logouto(): any {
    this.service.logout().subscribe(
      (posRes) => {
        if (posRes.logout == "success") {
          window.localStorage.removeItem("user_register");
          this.router.navigate(["/"]);
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
}
