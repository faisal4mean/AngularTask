import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from './post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}
  posts$!: Observable<any>;
  userId: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.userId = res.get('id');
    });
    // this.posts$ = this.postService.sendPosts();
    this.posts$ = this.postService.getAllPosts(this.userId);
  }
}
