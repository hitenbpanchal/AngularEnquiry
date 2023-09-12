import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { adminGuard } from './services/guard/admin.guard';
import { EnqueryFormComponent } from './pages/enquery-form/enquery-form.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { routerGuard } from './services/router-guard/router.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { ProfileFormComponent } from './pages/profile-form/profile-form.component';

const routes: Routes = [
  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'admin',
    component:AdminComponent,
    pathMatch:'full',
    canActivate:[adminGuard]
  },
  // {
  //   path:'user',
  //   component:NoramluserComponent,
  //   canActivate:[routerGuard],
  //   children:[
  //     {
  //       path:'profile',
  //       component:ProfileComponent
  //     }
  //   ]
  // },
  {
    path:'enquiry',
    component:EnqueryFormComponent,
    // canActivate:[routerGuard],
    pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'main',
        component:MainComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'profile-form',
        component:ProfileFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
