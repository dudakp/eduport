import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>('http://localhost:8081/v1/course');
  }

  getAllForUser(user: string): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`http://localhost:8081/user/enrolled?username=${user}`);
  }

  getAllForUserId(id: number): Observable<Course[]> {
    return this.httpClient.get<Course[]>(`http://localhost:8081/v1/course/byUserId/?id=${id}`);
  }

  createCourse(course: Course): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8081/v1/course/', course);
  }

  enrollToCourse(username: string, courseAbrv: string) {
    // const params = new HttpParams().set('userName', courseAbrv)
    //   .set('courseName', username);
    return this.httpClient.post<any>(`http://localhost:8081/user/enroll?username=${courseAbrv}&courseName=${username}`, {}, {});
  }

}
