import { Component, OnInit, ElementRef, NgZone, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
// import { StorageService } from "app/_services/storage.service";
// import { LoginResponse } from "app/_rmodel/response";
//
// import { matchingPasswords } from "app/_helper/common";




@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  // loginForm: FormGroup;



  constructor(
    // private auth_service: AuthenticationService,
    // private _formBuilder: FormBuilder,
    // private router: Router,
    // private element: ElementRef,
    // private zone: NgZone,
    // private storageService: StorageService,
    // private log_out: LogOutCommunicationService,
    // private location: PlatformLocation,
  ) {

  }

  statusChangeCallback(resp) {
    // console.log(resp.authResponse)
    // if (resp.status === 'connected') {
    //   let token = resp.authResponse.accessToken
    //   let used_referral_key = '';
    //   let for_login = true;
    //   this.busy = this.auth_service.facebook_login(used_referral_key, token, for_login).subscribe(
    //     resLogin => {
    //       if (resLogin.success == true) {
    //         this.auth_service.authenticate(resLogin)
    //         this.zone.run(() => this.router.navigate([FunUtils.HOME]));
    //       } else {
    //         if (resLogin.referral_pop_up) {
    //           this.storageService.write(FunUtils.REFERRAL_TYPE_KEY, FunUtils.REFERRAL_TYPE_FACEBOOK_VALUE)
    //           this.storageService.write(FunUtils.REFERRAL_TOKEN_KEY, token)
    //           this.zone.run(() => this.router.navigate([FunUtils.FUNDLE_REFERRAL]));
    //         }
    //       }
    //     }
    //   )
    // } else {
    //   FB.login((result: any) => {
    //     this.statusChangeCallback(result)
    //   }, { scope: 'user_friends, public_profile, email' });
    // }
  }

  ngOnInit() {
    // this.loginForm = this._formBuilder.group({
    //   userName: [null, [Validators.required, Validators.minLength(4)]],
    //   password: [null, [Validators.required, Validators.minLength(6)]],
    // });
    //
    // if (this.auth_service.isLoggedIn()) {
    //   this.zone.run(() => this.router.navigate([FunUtils.HOME]))
    // }
  }



  login_submit() {


    // this.busy = this.auth_service.rest_login_call(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
    //   resLogin => {
    //     if (resLogin.success == true) {
    //       this.auth_service.authenticate(resLogin)
    //       this.zone.run(() => this.router.navigate([FunUtils.HOME]));
    //
    //     } else {
    //       console.log(resLogin.message)
    //     }
    //   }
    // )
  }









  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}

