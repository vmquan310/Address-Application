import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { AddressService } from '../shared/address.service'
import { Address } from '../shared/address.model'

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addressList : Address[];

  addresses : Address[];

  constructor(private addressService: AddressService, private location: Location) { }

  ngOnInit() {
    // var x = this.addressService.getData();
    // x.snapshotChanges().subscribe(item => {
    //   this.addressList = [];
    //   item.forEach(element => {
    //     var y = element.payload.toJSON();
    //     y["$id"] = element.key;
    //     this.addressList.push(y as Address)
    //   })
    // });
    this.getAddresses();
  }

  @Input() address: Address;

  getAddresses(): void {
    this.addressService.getAddresses()
    .subscribe(addresses => this.addresses = addresses);
  }

  onEdit(address){
    this.addressService.selectedAddress = Object.assign({},address);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    console.log(this.address);
    this.addressService.updateAddress(this.address)
      .subscribe(() => this.goBack());
  }

  delete(address: Address): void {
    this.addresses = this.addresses.filter(h => h !== address);
    this.addressService.deleteAddress(address).subscribe();
  }
}
