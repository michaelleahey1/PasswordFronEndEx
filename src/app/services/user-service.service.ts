import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequiredInfo } from '../required-info';

@Injectable({
  providedIn: 'root'
})
export class RequiredInfoService {

  private baseURL = "http://localhost:8080/users/";

  constructor(private httpClient : HttpClient) { }

  getUserList() : Observable<RequiredInfo[]> {
    return this.httpClient.get<RequiredInfo[]>(`${this.baseURL}`);
  }
  createUser(user : RequiredInfo) : Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, user)
  }
  getUserByUName(uname : string) : Observable<RequiredInfo> {
    return this.httpClient.get<RequiredInfo>(`${this.baseURL}${uname}`);
  }
  updateUser(uname : string, user : RequiredInfo) : Observable<Object> {
    return this.httpClient.put(`${this.baseURL}${uname}`, user);
  }
  deleteUser(uname : string) : Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}${uname}`);
  }
}
