import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable()
export class UserService {
  userdata: User [];
  postUrl = 'http://httpbin.org/post';
  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  getUsers(): Observable<User[]> {

    return this.http.get('./assets/sample-data.json').pipe(
      map((resp) => resp as User[])
    );
  }
  saveUser() {
    console.log('Record updated');
  }

  postData(resp) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log('Post Data: ', this.postUrl, resp, httpOptions);
    return this.http.post(this.postUrl, resp, httpOptions);

  }
}
