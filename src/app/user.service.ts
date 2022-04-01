import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(public httpClient: HttpClient) {}

  getUsers(page: number= 1, results: number = 5): Observable<any> {
    return this.httpClient.get('https://randomuser.me/api/?results=10');
  }
}
