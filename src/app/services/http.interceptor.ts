import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  intercept(req: any, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = `${environment.nasaService.url}/${req.url}?api_key=${environment.nasaService.xApiKey}`;
    if (req.url.includes('planetary/apod')) {
      return next.handle(req.clone({ url }));
    }
  }
}
