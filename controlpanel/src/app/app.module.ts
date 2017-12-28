//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
// import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//services
import { AuthenticationService,  } from './_services/authentication.service';
import { ApiService } from "./_services/api.service";
import { StorageService } from "./_services/storage.service";
import { AuthGuard } from "./_guards/auth.guard";
import { AccountService } from "./_services/account.service";
//components
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

  ],
  entryComponents: [AuthenticationComponent],

  providers: [
    AuthenticationService,
    ApiService,
    StorageService,
    AuthGuard,
    AccountService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
