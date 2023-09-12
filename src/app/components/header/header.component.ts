import { Component, EventEmitter, Output } from '@angular/core';
import { LoginserviceService } from 'src/app/services/login/loginservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    public loginService:LoginserviceService
  ){}
  
  @Output() SideNavToggled = new EventEmitter<Boolean>();

  menuStatus: boolean = false;

  SideNavToggle() {
    this.menuStatus = !this.menuStatus;
    this.SideNavToggled.emit(this.menuStatus);
  }

  logOut(){
    this.loginService.logOut();
  }
}
