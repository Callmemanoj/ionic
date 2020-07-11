import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';
import { HttpClientModule } from '@angular/common/http';
import { contactService } from './contacts.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsPageRoutingModule,HttpClientModule,RouterModule.forChild([{path:"",component:ContactsPage}])
  ],
  declarations: [ContactsPage],
  providers:[contactService]
})
export class ContactsPageModule {}
