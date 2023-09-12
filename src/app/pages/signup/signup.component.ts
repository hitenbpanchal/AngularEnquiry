import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterserviceService } from 'src/app/services/registerservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    private registerService: RegisterserviceService,
    private router: Router,
    private _snackBar: MatSnackBar
    // public response: Response
  ){}

  public register = {
    email:'',
    password:'',
    // roles:[]
  }

  // public response!: Response[];

  formSubmit(){
    // alert("submit");
    console.log(this.register);
    this.registerService.registerUser(this.register).subscribe(
      (data:any)=>{
        try{
          if(data.result.email == this.register.email){
            console.log(data);
            this._snackBar.open("User Registered Successfully!!!",'OK',{
              duration:5000
            })
            this.router.navigate(['login']);
          }else{
            this._snackBar.open(data.error.message,'OK',{
              duration:5000
            })
          }
        }catch{
          this._snackBar.open(data.error.message,'OK',{
            duration:5000
          })
        }


      },
      (res:any)=>{
          console.log(res);
          if(res.error.email != null){
            this._snackBar.open(res.error.email,'OK',{
              duration:5000
            })
          }else{
            this._snackBar.open(res.error.password,'OK',{
              duration:5000
            })
          }
          // alert(res.error.message);
          this.router.navigate(['signup']);
        } 
    )
    
  }
}


