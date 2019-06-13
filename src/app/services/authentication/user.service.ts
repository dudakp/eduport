import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthenticationService,
              private httpClient: HttpClient) {
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:8081/user/byId/?id=${id}`);
  }

  getAllStudents(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:8081/user/allStudents');
  }

  isStudentLoggedIn() {
    return this.authService.getCurrentUser().roles.includes('ROLE_STUDENT');
  }

}
