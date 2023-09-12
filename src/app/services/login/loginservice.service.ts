import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../helper';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { Observable } from 'rxjs';
import { LoginResponse } from 'src/app/pages/login/LoginResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  private cookieStore:any

  constructor(
    private http: HttpClient,
    public router:Router
  ) { }

  public generateToken(loginReq: any):Observable<LoginResponse>{
   return this.http.post<LoginResponse>(`${baserUrl}/feign/login`,loginReq);
  }

  public getCurrentUser() : any {
    return this.http.get(`${baserUrl}/login/current-user`);
  }

  public loginUser(token: string){
    // localStorage.setItem("token",token);
    this.set("JwtToken",token)
    return true;
  }

  //user is logged in or not
  public isLoggedIn(){
    // let tokenStr = localStorage.getItem("token");
    let tokenStr = this.get("JwtToken");
    if(tokenStr==undefined || tokenStr == '' || tokenStr == null){
      return false
    }else{
      return true
    }
  }

  //logout function
  public logOut(){
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");
    this.remove("JwtToken");
    this.remove("user");
    this.router.navigate(['login'])
    return true;
  }

  //get Token
  public getToken(){
    // return localStorage.getItem("token");
    return this.get("JwtToken");
  }

  //To set Userdetails
  public setUser(user: any){
    // localStorage.setItem('user',JSON.stringify(user));
    this.set("user",JSON.stringify(user))
  }

  //to get user
  public getUser(){
    // let userStr = localStorage.getItem("user");
    let userStr = this.get("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logOut()
      return null;
    }
  }

  //get user role
  public getUserRole(){
    let user = this.getUser()
    return user.authorities[0].authority;
  }

  //parse coockie

  public parseCookies(cookies = document.cookie) {
    this.cookieStore = {};
    if (!!cookies === false) { return; }
    const cookiesArr = cookies.split(';');
    for (const cookie of cookiesArr) {
        const cookieArr = cookie.split('=');
        this.cookieStore[cookieArr[0].trim()] = cookieArr[1];
    }
}

get(key: string) {
  this.parseCookies();
  return !!this.cookieStore[key] ? this.cookieStore[key] : null;
}

remove(key: string) {
  document.cookie = `${key} = ; expires=Thu, 1 jan 1990 12:00:00 UTC; path=/`;
}

set(key: string, value: string) {
  document.cookie = key + '=' + (value || '');
}


}
