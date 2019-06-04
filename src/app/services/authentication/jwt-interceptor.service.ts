import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  private token: string;

  constructor(private authService: AuthenticationService) {
    authService.onTokenChange()
      .subscribe(token => {
        console.log('token from authService: ', localStorage.getItem('currentUser'));
        this.token = token;
      });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `${this.token}`
      }
    });
    console.log('intercepted reqest: ', req);
    return next.handle(req);
  }

  getToken(): string {
    return localStorage.getItem('currentUser');
  }

}
