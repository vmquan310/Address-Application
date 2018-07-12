import { Component, OnInit } from '@angular/core';

import { AddressService } from './shared/address.service'

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  constructor(private addressService: AddressService) { }

  ngOnInit() {
  }

}
