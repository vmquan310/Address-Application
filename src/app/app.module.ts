import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';  

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressComponent } from './addresses/address/address.component';
import { AddressListComponent } from './addresses/address-list/address-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressesComponent,
    AddressComponent,
    AddressListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
