import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserServiceService {
  private _userUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get<any>(this._userUrl);
  }
}
