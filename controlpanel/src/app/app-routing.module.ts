import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import FunUtils from "../app/_helper/utils";
import { LoginComponent } from '../app/login/login.component'

const appRoutes : Routes =
  [
    { path: FunUtils.BASE, component: LoginComponent },
    
  ];

// const appRoutes: Routes = [
//     { path: FunUtils.LOGIN, component: LoginComponent },
     
// ]

// @NgModule({
//     imports: [
//         RouterModule.forRoot(routes),
//     ],
//     exports: [
//         RouterModule
//     ]
// })
// export class AppRoutingModule { }
// export const routingComponents = [     ]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
