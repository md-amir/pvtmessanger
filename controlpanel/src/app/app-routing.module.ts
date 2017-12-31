import { NgModule, ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import Chattils from "./_helper/utils";
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes : Routes =
  [
    { path: Chattils.BASE, component: LoginComponent },
    { path: Chattils.LOGIN, component: LoginComponent },
    { path: Chattils.HOME, component: HomeComponent, canActivate: [AuthGuard]},
  ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
