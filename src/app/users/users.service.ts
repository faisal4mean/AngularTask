import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from './users.component';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers():Observable<UserModel> {
    return this.http.get<UserModel>('https://jsonplaceholder.typicode.com/users');
  }
}
