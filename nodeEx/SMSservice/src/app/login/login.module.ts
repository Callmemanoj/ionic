import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { RouterModule } from '@angular/router';
import { loginService } from './login.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    RouterModule.forChild([{
      path:"",component:LoginPage
    }])
  ],
  declarations: [LoginPage],
  providers:[loginService],
  exports:[LoginPage]
})
export class LoginPageModule {}
