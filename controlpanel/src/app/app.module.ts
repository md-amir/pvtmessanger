//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { StorageService } from './_services/storage.service';
import { ApiService } from './_services/api.service';
import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_guards/auth.guard';
import { HomeComponent } from './home/home.component';
import {HomeService} from "./_services/home.service";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
   ],

  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    routing,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
 ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [
    AuthenticationService,
    ApiService,
    StorageService,
    AuthGuard,
    HomeService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
