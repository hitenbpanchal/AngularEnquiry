import { Component } from '@angular/core';
import { NewProfile} from './NewProfile';
import { ProfileServiceService } from 'src/app/services/profile/profile-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent {

  constructor(
    private profileService:ProfileServiceService,
    private snackbar:MatSnackBar,
    private router:Router
  ){}

  profile:NewProfile = new NewProfile;
  profileId!: number;

  submitProfile(): void{
    console.log("profile submit works");
    this.profileService.registerProfile(this.profile).subscribe(
      (res:NewProfile)=>{
        console.log(res)
        this.profileId = res.id
        localStorage.setItem("profileId",res.id.toString())
        this.snackbar.open("Profile updated successfully!!","OK",{
          duration:5000
        })
        this.router.navigate(['/dashboard/profile']);

      },
      (error:any)=>{
        this.snackbar.open(error.error.message,"OK",{
          duration:5000
        })
      }
      )
  }
}
