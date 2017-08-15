import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBzn99u-owJiHhCyh-rsIrZTLT4s-kYuAU",
  authDomain: "dazed-dog.firebaseapp.com",
  databaseURL: "https://dazed-dog.firebaseio.com",
  projectId: "dazed-dog",
  storageBucket: "dazed-dog.appspot.com",
  messagingSenderId: "205853149405"
};


import { AppComponent } from './app.component';
import { BillsListComponent } from './bills/bills-list/bills-list.component';
import { BillDetailComponent } from './bills/bill-detail/bill-detail.component';
import { BillFormComponent } from './bills/bill-form/bill-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsListComponent,
    BillDetailComponent,
    BillFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, 'dazed-dog'),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
