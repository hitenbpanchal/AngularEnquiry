import { Component } from '@angular/core';
import { LoginserviceService } from 'src/app/services/login/loginservice.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  constructor(
    private loginService:LoginserviceService
  ){}

logOut(){
  this.loginService.logOut();
}
}
