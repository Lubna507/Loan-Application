import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  _url = 'http://localhost:3000/submission';  

  constructor(private _http: HttpClient) { }

  submission(user:User)
  {
    return this._http.post<any>(this._url,user);
  }
}
