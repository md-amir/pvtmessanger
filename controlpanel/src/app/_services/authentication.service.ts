import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { Subject } from 'rxjs/Subject';
import { ApiService } from "../_services/api.service";
import ChatUtils from "../_helper/utils";
import { StorageService } from "../_services/storage.service";
import { LoginResponse } from "../_rmodel/response";

@Injectable()
export class AuthenticationService {
    RESET_PASSWORD: string;
    REST_LOGIN_URL: string;
    

    constructor(private api: ApiService, private storageService: StorageService) {
        this.REST_LOGIN_URL = ChatUtils.API_REST_LOGIN;
        
    }

    // messenger login
    rest_login_call(userName, password) {
        let data = { username: userName, password: password };
        let url = this.REST_LOGIN_URL;
        return this.api.call(url, ChatUtils.POST_REQUEST_WITHOUT_TOKEN, data);
    }

    exchange_token(exchange_token_url:string) {
        return this.api.call(exchange_token_url, ChatUtils.GET_REQUEST_WITHOUT_TOKEN,);
    }

    isLoggedIn() {
        let isLoggedIn = this.storageService.read(ChatUtils.IS_LOGGED_IN)
        if (isLoggedIn) {
            return true;
        } else
            return false
    }

    authenticate(responseLogin: any) {
        let loginResponse = <LoginResponse>responseLogin;
        this.storageService.clear();
        this.storageService.write(ChatUtils.IS_LOGGED_IN, true);
        this.storageService.write(ChatUtils.LOGIN_RESPONSE, loginResponse);
        this.storageService.write(ChatUtils.USER, loginResponse.user);
        this.storageService.write(ChatUtils.TOKEN, loginResponse.token);
    }

    logOut() {
        this.storageService.clear();
        return true;
    }

    token(){
        return this.storageService.read(ChatUtils.TOKEN);
    }
}
