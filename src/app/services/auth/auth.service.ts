import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterResponse } from 'src/app/interfaces/register-response.interface';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public register(user: User): Observable<RegisterResponse> {
    const url = `${environment.rootUrl}/users/register`

    const obs = this.httpClient.post<RegisterResponse>(url, user)

    return obs
  }

  public isLogged(): boolean {
    const userInfoString = localStorage.getItem('userInfo')
    const isLogged = !!userInfoString

    return isLogged;
  }

  public getUserAccessToken(): string {
    const userInfoString = localStorage.getItem('userInfo') || ''

    const userInfo = JSON.parse(userInfoString) as RegisterResponse

    const userAccessToken = userInfo.accessToken

    return userAccessToken
  }

  public storeUserInfo(userInfo: RegisterResponse): void {
    const data = JSON.stringify(userInfo)

    localStorage.setItem('userInfo', data)
  }
}
