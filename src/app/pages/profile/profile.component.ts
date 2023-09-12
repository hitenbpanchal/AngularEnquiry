import { Component } from '@angular/core';
import { ProfileServiceService } from 'src/app/services/profile/profile-service.service';
import { Profile } from './Profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


  getProfile:Profile= new Profile;
  // profile:Profile = new Profile;
  

  constructor(
    private profileService:ProfileServiceService,
  ){ }

  profileId = localStorage.getItem("profileId");
  profileIdNum = Number(this.profileId);

  ngOnInit(): void{
    this.getProfileData(this.profileIdNum)
  }

  public getProfileData(profileId:any){
    this.profileService.getProfile(profileId).subscribe(
      (data:Profile)=>{
        // console.log(data);
        this.getProfile=data
        console.log("This Is profile Data works");
        console.log(this.getProfile);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
