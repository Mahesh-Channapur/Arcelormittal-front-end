import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from 'src/app/common-use/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { UserGroupManagementComponent } from './user-group-management/user-group-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path:'user-management',
        component:UserManagementComponent
      },
      {
        path:'user-group-management',
        component:UserGroupManagementComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
