import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const addresses = [
      {id: 1, streetName: "Quang Trung", ward: "11", district: "Go Vap", city: "Ho Chi Minh", country: "Viet Nam"},
      {id: 2, streetName: "Truong Son", ward: "12", district: "Tan Binh", city: "Ho Chi Minh", country: "Viet Nam"}
    ];
    return {addresses};
  }
}