import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAstronomyPictureData, NasaService } from './services/nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  astronomyPictureData$: Observable<IAstronomyPictureData>;

  constructor(private nasaService: NasaService) {}

  ngOnInit() {
    this.astronomyPictureData$ = this.nasaService.getAstronomyPicture();
  }
}
