import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contribution} from './contribution';


@Injectable({
  providedIn: 'root'
})
export class ContributionService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Contribution[]> {
    return this.httpClient.get<Contribution[]>(`http://localhost:8081/v1/contributions/all`);
  }

  getContributions(username: string): Observable<Contribution[]> {
    return this.httpClient.get<Contribution[]>(`http://localhost:8081/v1/contributions/byUsername/?username=${username}`);
  }

  getByAllCourseId(id: number): Observable<Contribution[]> {
    return this.httpClient.get<Contribution[]>(`http://localhost:8081/v1/contributions/byId/?id=${id}`);
  }

  postContribution(courseAbrv: string, contribution: Contribution): Observable<any> {
    return this.httpClient.post<any>(`http://localhost:8081/v1/contributions/?courseName=${courseAbrv}`, contribution, {});
  }

  deleteContribution(contrib: Contribution): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8081/v1/contributions/?title=${contrib.title}`);
  }
}
