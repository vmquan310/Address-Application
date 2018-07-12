import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Address } from './address.model'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addressList: AngularFireList<any>;
  selectedAddress: Address = new Address();

  addresses: any[] = [
    {streetName: "Quang Trung", ward: "11", district: "Go Vap", city: "Ho Chi Minh", country: "Viet Nam"},
    {streetName: "Truong Son", ward: "12", district: "Tan Binh", city: "Ho Chi Minh", country: "Viet Nam"}
  ];

  constructor(private firebase: AngularFireDatabase) { }

  getData(){
    this.addressList = this.firebase.list('addresses');
    return this.addressList;
  }

  insertAddress(address: Address){
    this.addressList.push({
      streetName : address.streetName,
      ward : address.ward,
      district : address.district,
      city : address.city,
      country: address.country 
    });
  }

  updateAddress(address: Address){
    this.addressList.update(address.$id,
      {
        streetName : address.streetName,
        ward : address.ward,
        district : address.district,
        city : address.city,
        country: address.country 
      });
  }

  deleteAddress($id: string){
    this.addressList.remove($id);
  }

  getList(): any[]{
    return this.addresses;
  }
}
