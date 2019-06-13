import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './user';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private tokenKey = 'currentUser';
  private subject = new BehaviorSubject<any>(undefined);
  private tokenSubject = new BehaviorSubject<string>(undefined);

  constructor(private httpClient: HttpClient,
              private toastService: ToastrService) {
    this.tokenSubject.next(localStorage.getItem(this.tokenKey));
  }


  login(user): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return new Observable(subscriber => {
        this.httpClient.post('http://localhost:8081/auth/signin', user, {headers, observe: 'response'})
          .subscribe(user => {
            // console.log(user);
            const token = user.headers.get('Authorization');
            if (user && token) {
              localStorage.setItem(this.tokenKey, token);
              const userFormToken = this.getUserFromToken(token);
              this.tokenSubject.next(token);
              this.subject.next(userFormToken);
              subscriber.next(userFormToken);
              this.toastService.success(`Logged in as ${this.subject.getValue().username}`);
              subscriber.complete();
            }
          });
      }
    );
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>('http://localhost:8081/auth/register', user);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.subject.next(undefined);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getUserFromToken(token: string): any {
    if (!token) {
      return;
    }
    return JSON.parse(atob(token.split('.')[1]));
  }

  getCurrentUser(): User {
    const token = this.tokenSubject.getValue();
    return JSON.parse(atob(token.split('.')[1]));
  }

  isStudentLoggedIn() {
    return this.getCurrentUser().roles.includes('ROLE_STUDENT');
  }


  onUserChange(): Observable<any> {
    this.subject.next(this.getCurrentUser());
    return this.subject.asObservable();
  }

  onTokenChange(): Observable<string> {
    return this.tokenSubject.asObservable();
  }
}
