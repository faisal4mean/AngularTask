import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})

// manoharreddy219@gmail.com
export class AlbumsComponent implements OnInit {
  constructor(
    private albumService: AlbumsService,
    private route: ActivatedRoute
  ) {
    
  }
  allAlbums$!: Observable<any>;
  userId!: any;
  userName!: any;
  ngOnInit(): void {
    this.allAlbums$ = this.albumService.getAllAlbums();
    this.allAlbums$.subscribe((res) => {
      console.log(res);
    });
  }
}
