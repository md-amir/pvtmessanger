import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import FunUtils from "../_helper/utils";
import {StorageService} from "./storage.service";


@Injectable()
export class ApiService {
  private url: string
  private headers: Headers
  constructor(private http: Http, private requestoptions: RequestOptions, private storageService: StorageService) { }

  call(url: string, callType: any, data?: any,formData?:any,options?:any) {
    if (callType == FunUtils.GET_REQUEST_WITHOUT_TOKEN) {
      return this.getRequestWithoutToken(url);
    }
    else if (callType == FunUtils.POST_REQUEST_WITHOUT_TOKEN) {
      return this.postRequestWithoutToken(url, data);
    } else if (callType == FunUtils.POST_REQUEST_WITH_TOKEN) {
      return this.PostRequestWithToken(url, data);
    } else if (callType == FunUtils.GET_REQUEST_WITH_TOKEN) {
      return this.getRequestWithToken(url);
    } else if (callType == FunUtils.POST_REQUEST_FOR_FILE_UPLOAD) {
      return this.PostRequestToUploadFile(url,formData,options);
    } else {
      return null;
    }
  }

  // POST REQUEST FOR UPLOAD FILE
  PostRequestToUploadFile(url, formData,options){
    return this.http.post(url, formData, options)
      .map(res => res.json())
      .catch(this.handleError);

  }

  // POST REQUEST WITH THREE ARGUMENTS
  PostRequestWithToken(url, data) {
    let token = this.storageService.read(FunUtils.TOKEN);
    this.headers = new Headers();
    this.headers.append("Content-Type", 'application/json');
    this.headers.append("Authorization", 'Token ' + token)


    this.requestoptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: this.headers,
      body: JSON.stringify(data)
    })

    let result = this.http.request(new Request(this.requestoptions))
      .map((response: Response) => response.json())
      .catch(this.handleError);
    console.log(result);
    return result;
  }

  // POST REQUEST WITH TWO ARGUMENTS
  postRequestWithoutToken(url, data) {
    this.headers = new Headers();
    this.headers.append("Content-Type", 'application/json');

    this.requestoptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: this.headers,
      body: JSON.stringify(data)
    })

    let result = this.http.request(new Request(this.requestoptions))
      .map((response: Response) => response.json())
      .catch(this.handleError);
    console.log(result);
    return result;
  }

  postRequest(url, data) {
    this.headers = new Headers();
    this.headers.append("Content-Type", 'application/json');

    this.requestoptions = new RequestOptions({
      method: RequestMethod.Post,
      url: url,
      headers: this.headers,
      body: JSON.stringify(data)
    })

    let result = this.http.request(new Request(this.requestoptions))
      .map((response: Response) => response.json())
      .catch(this.handleError);
    console.log(result);
    return result;
  }

  getRequestWithoutToken(url) {
    return this.http.get(url)
      .map((response: Response) => response.json())
      .catch(this.handleError)
  }

  getRequestWithToken(url) {
    let token = this.storageService.read(FunUtils.TOKEN);
    let authorization = 'Token '+token

    this.headers = new Headers();
    this.headers.append("Authorization", authorization);
    this.headers.append("Content-Type", "application/json");


    this.requestoptions = new RequestOptions({
      method: RequestMethod.Get,
      url: url,
      headers: this.headers,
      body:'',
    })
     return this.http.request(new Request(this.requestoptions))
      .map((response: Response) => response.json())
      .catch(this.handleError);
    // return this.http.get(url, this.requestoptions)
    //   .map((response: Response) => response.json())
    //   .catch(this.handleError);


  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  errorHandler(error: Response) {
    console.log(error)
    return Observable.throw(error || 'server Error')
  }



}


