import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../posts/post.service';
import { UsersService } from './users.service';

interface Address {
  city: string;
  geo: Object;
  street: string;
  suite: string;
  zipcode: string;
}
export interface UserModel {
  address: Object;
  company: Address;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UsersService,
    private router: Router,
    private postService: PostService
  ) {}
  allUsers$!: Observable<UserModel | any>;
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((res) => {});
    this.allUsers$ = this.userService.getAllUsers();
  }

  getUserId(userId: any) {
    console.log(userId);
    this.postService.getAllPosts(userId).subscribe((res) => {
      this.router.navigate([`/user/post/${userId}`]);
    });
  }

  goToAlbum(userId: any, userName: any) {
    console.log(userId);
    this.router.navigate([`albums/${userId}/${userName}`]);
  }
}
