import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Address } from '../shared/address.model'
import { AddressService } from '../shared/address.service'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addresses: Address[];

  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(addressForm: NgForm) {
    // if(addressForm.value.$id == null)
    // this.addressService.insertAddress(addressForm.value);
    // else
    //   this.addressService.updateAddress(addressForm.value);
    this.add(addressForm.value);
    this.resetForm();
  }

  add(address: Address): void {
    this.addressService.addAddress(address as Address).subscribe(address=>{
      console.log(address);
      console.log(this.addresses);
      this.addresses.push(address);
      
    })
  }

  resetForm(addressForm?: NgForm) {
    if (addressForm != null)
      addressForm.reset();
    this.addressService.selectedAddress = {
      id: null,
      streetName: '',
      ward: '',
      district: '',
      city: '',
      country: ''
    }
  }
}
