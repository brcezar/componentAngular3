import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(public httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get('https://randomuser.me/api/?results=10');
  }
}
