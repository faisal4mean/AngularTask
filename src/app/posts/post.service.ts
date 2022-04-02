import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserModel } from '../users/users.component';

interface PostModel {
  body: string;
  id: number;
  title: string;
  userId: number;
}
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getAllPosts(id: any): Observable<any> {
    return this.http.get<UserModel>(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
  }
}
