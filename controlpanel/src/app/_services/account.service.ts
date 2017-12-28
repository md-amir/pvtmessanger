import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import { Subject } from 'rxjs/Subject';
import { ApiService } from "app/_services/api.service";
import FunUtils from "app/_helper/utils";
import { StorageService } from "app/_services/storage.service";
import { LoginResponse } from "app/_rmodel/response";


@Injectable()
export class AccountService {

    BASE_URL: string;
    BUSINESS_TYPES_URL: string;
    GET_MY_COMPANIES_URL: string;
    CREATE_COMPANY: string;
    GET_MY_COMPANY_BY_ID_URL: string;

    constructor(private api: ApiService, private storageService: StorageService) {
        this.BASE_URL = FunUtils.BASE_URL;
        this.BUSINESS_TYPES_URL = this.BASE_URL + FunUtils.API_BUSINESS_TYPE;
        this.GET_MY_COMPANIES_URL = FunUtils.API_MY_COMPANIES;
        this.GET_MY_COMPANY_BY_ID_URL = FunUtils.API_MY_COMPANY_BY_ID;
        this.CREATE_COMPANY = FunUtils.API_CREATE_COMPANY;
    }

    getBusinessTypes() {
        return this.api.call(this.BUSINESS_TYPES_URL, FunUtils.GET_REQUEST_WITH_TOKEN)
    }

    getMyCompanies() {
        return this.api.call(this.GET_MY_COMPANIES_URL, FunUtils.GET_REQUEST_WITH_TOKEN)
    }
    getMyCompanyById(data) {
        return this.api.call(this.GET_MY_COMPANY_BY_ID_URL, FunUtils.POST_REQUEST_WITH_TOKEN,data)
    }
    createComapny(data) {
        return this.api.call(this.CREATE_COMPANY, FunUtils.POST_REQUEST_WITH_TOKEN, data)
    }
    uploadFile(formData,options){
        return this.api.call(FunUtils.API_COMPANY_MEDIA_UPLOAD,FunUtils.POST_REQUEST_FOR_FILE_UPLOAD,undefined, formData,options)
    }
    createProduct(formData,options){
        return this.api.call(FunUtils.API_COMPANY_ADD_PRODUCT,FunUtils.POST_REQUEST_FOR_FILE_UPLOAD,undefined, formData,options)
    }
}
