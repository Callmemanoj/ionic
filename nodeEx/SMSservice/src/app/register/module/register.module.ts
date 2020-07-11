import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from '../components/register.page';
import { registerService } from '../service/register.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    HttpClientModule,RouterModule.forChild([{path:"",component:RegisterPage}])
  ],
  declarations: [RegisterPage],
  providers:[registerService]
})
export class RegisterPageModule {}
