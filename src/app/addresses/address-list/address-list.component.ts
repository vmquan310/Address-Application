import { Component, OnInit } from '@angular/core';

import { AddressService } from '../shared/address.service'
import { Address } from '../shared/address.model'

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  addressList : Address[];

  public addresses : any[];

  constructor(private addressService: AddressService) { }

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
    this.addresses = this.addressService.getList();
  }

  onEdit(address){
    this.addressService.selectedAddress = Object.assign({},address);
  }
}
