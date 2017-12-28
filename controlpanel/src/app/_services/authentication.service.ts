import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { Subject } from 'rxjs/Subject';
import { ApiService } from "./api.service";
import FunUtils from "../_helper/utils";
import { StorageService } from "./storage.service";
import { LoginResponse } from "../_rmodel/response";

@Injectable()
export class AuthenticationService {
    RESET_PASSWORD: string;
    BASE_URL: string;
    REST_LOGIN_URL: string;
    GOOGLE_LOGIN_URL: string;
    FACEBOOK_LOGIN_URL: string;
    FORGOT_PASSWORD: string;
    EMAIL_VERIFICATION: string;
    SIGN_UP: string;

    constructor(private api: ApiService, private storageService: StorageService) {
        this.BASE_URL = FunUtils.BASE_URL;
        this.REST_LOGIN_URL = this.BASE_URL + FunUtils.API_REST_LOGIN;
        this.GOOGLE_LOGIN_URL = this.BASE_URL + FunUtils.API_GOOGLE_LOGIN;
        this.FACEBOOK_LOGIN_URL = this.BASE_URL + FunUtils.API_FACEBOOK_LOGIN;
        this.FORGOT_PASSWORD = this.BASE_URL + FunUtils.API_FORGOT_PASSWORD;
        this.RESET_PASSWORD = this.BASE_URL + FunUtils.API_RESET_PASSWORD
        this.EMAIL_VERIFICATION = this.BASE_URL + FunUtils.API_EMAIL_VERIFICATION
        this.SIGN_UP = this.BASE_URL + FunUtils.API_SIGN_UP
    }

    // Fundle login
    rest_login_call(userName, password) {
        let data = { username: userName, password: password };
        let url = this.REST_LOGIN_URL;
        return this.api.call(url, FunUtils.POST_REQUEST_WITHOUT_TOKEN, data);
    }

    // Google login
    google_login(used_referral_key, token, for_login) {
        let data = { token: token, used_referral_key: used_referral_key, for_login: for_login, web_req: true }
        let url = this.GOOGLE_LOGIN_URL
        return this.api.call(url, FunUtils.POST_REQUEST_WITHOUT_TOKEN, data)
    }

    // Facebook login
    facebook_login(used_referral_key, accesstoken, for_login) {
        let data = { access_token: accesstoken, used_referral_key: used_referral_key, for_login: for_login, web_req: true }
        let url = this.FACEBOOK_LOGIN_URL
        return this.api.call(url, FunUtils.POST_REQUEST_WITHOUT_TOKEN, data)
    }

    exchange_token(exchange_token_url:string) {
        return this.api.call(exchange_token_url, FunUtils.GET_REQUEST_WITHOUT_TOKEN,);
    }

    //Forgot password
    forgot_password(email) {
        let data = { email: email };
        let url = this.FORGOT_PASSWORD;
        return this.api.call(url,FunUtils.POST_REQUEST_WITHOUT_TOKEN, data)
    }

    // email verification
    email_verification(email) {//email=amir@screenshot.company
        let url = this.EMAIL_VERIFICATION + "email=" + email
        return this.api.call(url,FunUtils.GET_REQUEST_WITHOUT_TOKEN)
    }
    //sign up
    sign_up(data) {
        let url = this.SIGN_UP
        return this.api.call(url,FunUtils.POST_REQUEST_WITHOUT_TOKEN, data)
    }

    //Reset password
    reset_password(email_or_number, auth_code, password_reset_key, password) {
        let data = { email_or_number: email_or_number, auth_code: auth_code, password_reset_key: password_reset_key, password: password };
        let url = this.RESET_PASSWORD;
        return this.api.call(url, FunUtils.POST_REQUEST_WITHOUT_TOKEN,data)
    }
    isLoggedIn() {
        let isLoggedIn = this.storageService.read(FunUtils.IS_LOGGED_IN)
        if (isLoggedIn) {
            return true;
        } else
            return false
    }

    authenticate(responseLogin: any) {
        let loginResponse = <LoginResponse>responseLogin;
        this.storageService.clear();
        this.storageService.write(FunUtils.IS_LOGGED_IN, true);
        this.storageService.write(FunUtils.LOGIN_RESPONSE, loginResponse);
        this.storageService.write(FunUtils.USER, loginResponse.user);
        this.storageService.write(FunUtils.TOKEN, loginResponse.token);
    }

    logOut() {
        this.storageService.clear();
        return true;
    }

    token(){
        return this.storageService.read(FunUtils.TOKEN);
    }



}


//********************************************************************** */


@Injectable()
export class LogOutCommunicationService {
    // Observable string sources
    private notify = new Subject<any>();

    // Observable string streams
    notifyObservable$ = this.notify.asObservable();

    // Service message commands
    public notifyOther(data: any) {
        // if (data) {
        this.notify.next(data);
        // }
    }

}
