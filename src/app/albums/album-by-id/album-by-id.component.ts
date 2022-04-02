import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
@Component({
  selector: 'app-album-by-id',
  templateUrl: './album-by-id.component.html',
  styleUrls: ['./album-by-id.component.scss'],
})
export class AlbumByIdComponent implements OnInit {
  userId!: any;
  userName!: any;
  allAlbums$: any;
  getAlbumsById: any;
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumsService
  ) {
    this.route.paramMap.subscribe((res) => {
      this.userId = res.get('id');
      this.userName = res.get('name');
    });
  }

  ngOnInit(): void {
    this.albumService.getAllAlbums().subscribe((res: any) => {
      this.getAlbumsById = res.filter((res: any) => {
        return res?.userId == this.userId;
      });
    });
  }
}
