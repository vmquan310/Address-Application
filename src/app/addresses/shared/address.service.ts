import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Observable, of } from 'rxjs';

import { Address } from './address.model'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressList: AngularFireList<any>;
  selectedAddress: Address = new Address();

  constructor(private firebase: AngularFireDatabase,  private http: HttpClient) { }

  // getData(){
  //   this.addressList = this.firebase.list('addresses');
  //   return this.addressList;
  // }

  // insertAddress(address: Address){
  //   this.addressList.push({
  //     streetName : address.streetName,
  //     ward : address.ward,
  //     district : address.district,
  //     city : address.city,
  //     country: address.country 
  //   });
  // }

  // updateAddress(address: Address){
  //   this.addressList.update(address.$id,
  //     {
  //       streetName : address.streetName,
  //       ward : address.ward,
  //       district : address.district,
  //       city : address.city,
  //       country: address.country 
  //     });
  // }

  // deleteAddress($id: string){
  //   this.addressList.remove($id);
  // }

  private addressesUrl = 'api/addresses';  // URL to web api

  getAddresses (): Observable<Address[]> {
    return this.http.get<Address[]>(this.addressesUrl)
  }

  addAddress (address: Address): Observable<Address> {
    return this.http.post<Address>(this.addressesUrl, address, httpOptions);
  }

  updateAddress (address: Address): Observable<any> {
    console.log(address);
    return this.http.put(this.addressesUrl, address, httpOptions)
  }

  deleteAddress (address: Address | number): Observable<Address> {
    const id = typeof address === 'number' ? address : address.id;
    const url = `${this.addressesUrl}/${id}`;
  
    return this.http.delete<Address>(url, httpOptions);
  }
}
