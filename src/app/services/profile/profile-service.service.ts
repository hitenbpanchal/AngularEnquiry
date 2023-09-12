import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Profile } from 'src/app/pages/profile/Profile';
import baserUrl from '../helper';
import enqUrl from '../enqUrl';
import { NewProfile } from 'src/app/pages/profile-form/NewProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(
    private http:HttpClient
  ) { }

  public getProfile(profileId:any):Observable<NewProfile>{
    return this.http.get<NewProfile>(`${enqUrl}/feign/profile/`+profileId);
  }

  public registerProfile(profile:any):Observable<NewProfile>{
    return this.http.post<NewProfile>(`${enqUrl}/feign/profile`,profile);
  }
}
