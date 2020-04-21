import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable()
export class UserService {
  userdata: User [];

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
}
