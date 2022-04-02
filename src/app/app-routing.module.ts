import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumByIdComponent } from './albums/album-by-id/album-by-id.component';
import { AlbumsComponent } from './albums/albums.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  { path: 'albums/:id/:name', component: AlbumByIdComponent },
  { path: 'user/post/:id', component: PostsComponent },
  { path: '**', redirectTo: 'users' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
