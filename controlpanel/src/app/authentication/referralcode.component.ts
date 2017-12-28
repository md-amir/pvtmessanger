import { Component, OnInit,  NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { StorageService } from "app/_services/storage.service";
import FunUtils from "app/_helper/utils";

@Component({

  templateUrl: './referral_code_popup.html',
  styleUrls: ['./authentication.component.css']
})
export class FundleReferralCodeComponent implements OnInit {
  closeMessage: boolean;
  referralForm: FormGroup;
  token: string;
  errorMessage: string;
  referralType: string;

  constructor(
    private auth_service: AuthenticationService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private zone: NgZone,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.closeMessage = true;
    this.referralForm = this._formBuilder.group({
      referral: [],

    });
    this.referralType = <string>this.storageService.read(FunUtils.REFERRAL_TYPE_KEY);
    console.log(this.referralType)
    this.token = <string>this.storageService.read(FunUtils.REFERRAL_TOKEN_KEY);
    this.errorMessage = ""
    console.log(this.token)

  }

  referral_submit() {
    if (this.referralForm.value.referral == null || this.referralForm.value.referral == "") {
      this.closeMessage = false;
      this.errorMessage = "Please enter referral code or cancel if you don't have"
    } else {
      //SERVER CALL
      let used_referral_key = this.referralForm.value.referral;
        this.fundle_social_call(used_referral_key)
    }
    console.log(this.referralForm.value.referral)
  }

  cancel() {
    console.log('cancelled')
    let used_referral_key = '';
    this.fundle_social_call(used_referral_key)
  }

  fundle_social_call(used_referral_key) {
    let for_login = false;
    if (this.referralType == FunUtils.REFERRAL_TYPE_GOOGLE_VALUE) {
      this.auth_service.google_login(used_referral_key, this.token, for_login).subscribe(
        resLogin => {
          if (resLogin.success == true) {
            this.auth_service.authenticate(resLogin)
            this.zone.run(() => this.router.navigate([FunUtils.HOME]));

          } else {
            console.log(resLogin.message)
            this.closeMessage = false;
            this.errorMessage = resLogin.message
          }
        }
      )
    } else if (this.referralType == FunUtils.REFERRAL_TYPE_FACEBOOK_VALUE){

      this.auth_service.facebook_login(used_referral_key, this.token, for_login).subscribe(
        resLogin => {
          if (resLogin.success == true) {
            this.auth_service.authenticate(resLogin)
            this.zone.run(() => this.router.navigate([FunUtils.HOME]));

          } else {
            console.log(resLogin.message)
            this.closeMessage = false;
            this.errorMessage = resLogin.message
          }
        }
      )

    }

  }
}
