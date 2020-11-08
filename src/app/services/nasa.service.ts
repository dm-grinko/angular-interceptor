import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IAstronomyPictureData {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private httpClient: HttpClient) { }

  getAstronomyPicture(): Observable<any> {
    return this.httpClient.get('planetary/apod');
  }
}
