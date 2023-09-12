import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ValidateResponse } from './ValidateResponse';
import baserUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(
    private http:HttpClient,
    public router:Router
  ) { }

  public validateToken(token:string):Observable<ValidateResponse>{
    return this.http.post<ValidateResponse>(`${baserUrl}/token/refresh`,token);
  }
}
