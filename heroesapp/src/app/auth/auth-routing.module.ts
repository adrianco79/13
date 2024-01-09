import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { registerLocaleData } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutPageComponent,
    children:[
      {
        path:'login',
        component:LoginPageComponent
      },
      {
        path:'register',
        component:RegisterPageComponent
      }

    ]

    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }