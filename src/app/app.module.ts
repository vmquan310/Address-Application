import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http'; 

const routesConfig: Routes = [
  { path: 'address', component: AddressComponent },
  { path: 'addresses', component: AddressesComponent },
  { path: 'addresslist', component: AddressListComponent },
  { path: '', component: AddressListComponent }
]

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AddressesComponent } from './addresses/addresses.component';
import { AddressComponent } from './addresses/address/address.component';
import { AddressListComponent } from './addresses/address-list/address-list.component';
import { InMemoryDataService } from './addresses/shared/memory-data.service';

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
    FormsModule,
    RouterModule.forRoot(routesConfig),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
