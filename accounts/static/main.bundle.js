webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, auth_service) {
        this.router = router;
        this.auth_service = auth_service;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth_service.isLoggedIn()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_helper/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");

var ChatUtils = (function () {
    function ChatUtils() {
    }
    // methods for uploading data for pre processing
    ChatUtils.prepare_file_upload = function (event, file_name, companyId, storageService) {
        var fileList = event.target.files;
        var formData = new FormData();
        if (fileList.length > 0) {
            var file = fileList[0];
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            var token = storageService.read(ChatUtils.TOKEN);
            formData.append(file_name, file, file.name);
            formData.append('companyId', "" + companyId);
            headers.append("Authorization", 'Token ' + token);
            headers.append('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* RequestOptions */]({ headers: headers });
            return { formData: formData, options: options };
        }
    };
    ChatUtils.prepare_file_upload1 = function (formData, storageService) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        var token = storageService.read(ChatUtils.TOKEN);
        headers.append("Authorization", 'Token ' + token);
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* RequestOptions */]({ headers: headers });
        return { formData: formData, options: options };
    };
    /**
     * Different url for rest api
     */
    //static BASE_URL = 'http://localhost:8000';
    ChatUtils.BASE_URL = 'https://pvtmessanger.herokuapp.com';
    ChatUtils.API_REST_LOGIN = ChatUtils.BASE_URL + '/accounts/api/v1/login';
    ChatUtils.API_REST_ALL_USER = ChatUtils.BASE_URL + '/accounts/api/v1/users';
    ChatUtils.API_GET_INDIVIDUAL_CONVERSATION = ChatUtils.BASE_URL + '/chat/api/v1/individual/conversation';
    ChatUtils.REST_GET_MY_CONVERSATIONS_INBOX = ChatUtils.BASE_URL + '/chat/api/v1/my/conversations';
    ChatUtils.REST_GET_CONVERSATION_BY_ID = ChatUtils.BASE_URL + '/chat/api/v1/conversation/byid';
    ChatUtils.REST_SEND_MESSAGE = ChatUtils.BASE_URL + '/chat/api/v1/send/message';
    //FOR web CLIENT
    ChatUtils.BASE = '';
    ChatUtils.LOGIN = 'login';
    ChatUtils.HOME = 'home';
    /**
     * constants
     *
     */
    // keys
    ChatUtils.REFERRAL_TYPE_KEY = 'referral_type';
    ChatUtils.REFERRAL_TOKEN_KEY = "referral_token_key";
    ChatUtils.SELECTED_USER_ID = "selected_user_id";
    // values
    ChatUtils.IS_LOGGED_IN = 'isLoggedIn';
    ChatUtils.LOGIN_RESPONSE = 'loginResponse';
    ChatUtils.USER = 'user';
    ChatUtils.TOKEN = 'token';
    ChatUtils.GET_REQUEST_WITHOUT_TOKEN = 1;
    ChatUtils.GET_REQUEST_WITH_TOKEN = 2;
    ChatUtils.POST_REQUEST_WITHOUT_TOKEN = 3;
    ChatUtils.POST_REQUEST_WITH_TOKEN = 4;
    ChatUtils.POST_REQUEST_FOR_FILE_UPLOAD = 5;
    return ChatUtils;
}());
/* harmony default export */ __webpack_exports__["a"] = (ChatUtils);


/***/ }),

/***/ "../../../../../src/app/_services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helper_utils__ = __webpack_require__("../../../../../src/app/_helper/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__storage_service__ = __webpack_require__("../../../../../src/app/_services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiService = (function () {
    function ApiService(http, requestoptions, storageService) {
        this.http = http;
        this.requestoptions = requestoptions;
        this.storageService = storageService;
    }
    ApiService.prototype.call = function (url, callType, data, formData, options) {
        if (callType == __WEBPACK_IMPORTED_MODULE_6__helper_utils__["a" /* default */].GET_REQUEST_WITHOUT_TOKEN) {
            return this.getRequestWithoutToken(url);
        }
        else if (callType == __WEBPACK_IMPORTED_MODULE_6__helper_utils__["a" /* default */].POST_REQUEST_WITHOUT_TOKEN) {
            return this.postRequestWithoutToken(url, data);
        }
        else if (callType == __WEBPACK_IMPORTED_MODULE_6__helper_utils__["a" /* default */].POST_REQUEST_WITH_TOKEN) {
            return this.PostRequestWithToken(url, data);
        }
        else if (callType == __WEBPACK_IMPORTED_MODULE_6__helper_utils__["a" /* default */].GET_REQUEST_WITH_TOKEN) {
            return this.getRequestWithToken(url);
        }
        else if (callType == __WEBPACK_IMPORTED_MODULE_6__helper_utils__["a" /* default */].POST_REQUEST_FOR_FILE_UPLOAD) {
            return this.PostRequestToUploadFile(url, formData, options);
        }
        else {
            return null;
        }
    };
    // POST REQUEST FOR UPLOAD FILE
    ApiService.prototype.PostRequestToUploadFile = function (url, formData, options) {
        return this.http.post(url, formData, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // POST REQUEST WITH THREE ARGUMENTS
    ApiService.prototype.PostRequestWithToken = function (url, data) {
        var token = this.storageService.read(__WEBPACK_IMPORTED_MODULE_6__helper_utils__["a" /* default */].TOKEN);
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.headers.append("Content-Type", 'application/json');
        this.headers.append("Authorization", 'Token ' + token);
        this.requestoptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        });
        var result = this.http.request(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Request */](this.requestoptions))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        console.log(result);
        return result;
    };
    // POST REQUEST WITH TWO ARGUMENTS
    ApiService.prototype.postRequestWithoutToken = function (url, data) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.headers.append("Content-Type", 'application/json');
        this.requestoptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        });
        var result = this.http.request(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Request */](this.requestoptions))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        // console.log(result);
        return result;
    };
    ApiService.prototype.postRequest = function (url, data) {
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.headers.append("Content-Type", 'application/json');
        this.requestoptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Post,
            url: url,
            headers: this.headers,
            body: JSON.stringify(data)
        });
        var result = this.http.request(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Request */](this.requestoptions))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        console.log(result);
        return result;
    };
    ApiService.prototype.getRequestWithoutToken = function (url) {
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ApiService.prototype.getRequestWithToken = function (url) {
        var token = this.storageService.read(__WEBPACK_IMPORTED_MODULE_6__helper_utils__["a" /* default */].TOKEN);
        var authorization = 'Token ' + token;
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        this.headers.append("Authorization", authorization);
        this.headers.append("Content-Type", "application/json");
        this.requestoptions = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* RequestMethod */].Get,
            url: url,
            headers: this.headers,
            body: '',
        });
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Request */](this.requestoptions))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        // return this.http.get(url, this.requestoptions)
        //   .map((response: Response) => response.json())
        //   .catch(this.handleError);
    };
    ApiService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["g" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    ApiService.prototype.errorHandler = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error || 'server Error');
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["f" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_7__storage_service__["a" /* StorageService */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/_services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_utils__ = __webpack_require__("../../../../../src/app/_helper/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_service__ = __webpack_require__("../../../../../src/app/_services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = (function () {
    function AuthenticationService(api, storageService) {
        this.api = api;
        this.storageService = storageService;
        this.REST_LOGIN_URL = __WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].API_REST_LOGIN;
    }
    // messenger login
    AuthenticationService.prototype.rest_login_call = function (userName, password) {
        var data = { username: userName, password: password };
        var url = this.REST_LOGIN_URL;
        return this.api.call(url, __WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].POST_REQUEST_WITHOUT_TOKEN, data);
    };
    AuthenticationService.prototype.exchange_token = function (exchange_token_url) {
        return this.api.call(exchange_token_url, __WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].GET_REQUEST_WITHOUT_TOKEN);
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var isLoggedIn = this.storageService.read(__WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].IS_LOGGED_IN);
        if (isLoggedIn) {
            return true;
        }
        else
            return false;
    };
    AuthenticationService.prototype.authenticate = function (responseLogin) {
        var loginResponse = responseLogin;
        this.storageService.clear();
        this.storageService.write(__WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].IS_LOGGED_IN, true);
        this.storageService.write(__WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].LOGIN_RESPONSE, loginResponse);
        this.storageService.write(__WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].USER, loginResponse.user);
        this.storageService.write(__WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].TOKEN, loginResponse.token);
    };
    AuthenticationService.prototype.logOut = function () {
        this.storageService.clear();
        return true;
    };
    AuthenticationService.prototype.token = function () {
        return this.storageService.read(__WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].TOKEN);
    };
    AuthenticationService.prototype.loggedinUser = function () {
        return this.storageService.read(__WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].USER);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/home.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_utils__ = __webpack_require__("../../../../../src/app/_helper/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/_services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__("../../../../../src/app/_services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = (function () {
    function HomeService(api, storageService) {
        this.api = api;
        this.storageService = storageService;
        this.REST_GET_USERS = __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].API_REST_ALL_USER;
        this.REST_GET_INDIVIDUAL_CONVERSATION = __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].API_GET_INDIVIDUAL_CONVERSATION;
        this.REST_GET_MY_CONVERSATIONS_INBOX = __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].REST_GET_MY_CONVERSATIONS_INBOX;
        this.REST_GET_CONVERSATIONS_BY_ID = __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].REST_GET_CONVERSATION_BY_ID;
    }
    HomeService.prototype.getAllUsers = function () {
        return this.api.call(this.REST_GET_USERS, __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].GET_REQUEST_WITH_TOKEN);
    };
    HomeService.prototype.getIndividualConversation = function (data) {
        return this.api.call(this.REST_GET_INDIVIDUAL_CONVERSATION, __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].POST_REQUEST_WITH_TOKEN, data);
    };
    HomeService.prototype.sendMessage = function (data) {
        return this.api.call(__WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].REST_SEND_MESSAGE, __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].POST_REQUEST_WITH_TOKEN, data);
    };
    HomeService.prototype.getMyConversationInbox = function () {
        return this.api.call(this.REST_GET_MY_CONVERSATIONS_INBOX, __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].GET_REQUEST_WITH_TOKEN);
    };
    HomeService.prototype.ConversationById = function (data) {
        return this.api.call(this.REST_GET_CONVERSATIONS_BY_ID, __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].POST_REQUEST_WITH_TOKEN, data);
    };
    HomeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.write = function (key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    StorageService.prototype.read = function (key) {
        var value = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }
        return null;
    };
    StorageService.prototype.clear = function () {
        localStorage.clear();
        return null;
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_utils__ = __webpack_require__("../../../../../src/app/_helper/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");





var appRoutes = [
    { path: __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].BASE, component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].LOGIN, component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_1__helper_utils__["a" /* default */].HOME, component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__guards_auth_guard__["a" /* AuthGuard */]] },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container-fluid\">\r\n    <router-outlet>\r\n\r\n    </router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_storage_service__ = __webpack_require__("../../../../../src/app/_services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_api_service__ = __webpack_require__("../../../../../src/app/_services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_home_service__ = __webpack_require__("../../../../../src/app/_services/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//modules

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */], __WEBPACK_IMPORTED_MODULE_15_ngx_bootstrap_tooltip__["a" /* TooltipModule */], __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap_modal__["a" /* ModalModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_9__services_api_service__["a" /* ApiService */],
                __WEBPACK_IMPORTED_MODULE_8__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_11__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_13__services_home_service__["a" /* HomeService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fhomeheader {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  min-height: 500px\r\n\r\n}\r\n\r\n.fhomeheader h1, h3 {\r\n  text-align: center;\r\n\r\n}\r\n\r\n.fhomeheader button {\r\n  position: relative;\r\n  top: 50%;\r\n  left: 40%;\r\n  margin-top: 50px;\r\n}\r\n\r\n.time-right {\r\n  float: right;\r\n  margin: 0px 10px;\r\n}\r\n\r\n.time-left {\r\n  float: left;\r\n  color: #999;\r\n  margin-top: 70px;\r\n\r\n}\r\n\r\n.fgray img {\r\n  margin: 15px 0;\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n\r\n.conversation-image {\r\n  margin: 15px 15px;\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n.image-left {\r\n  float: left;\r\n}\r\n\r\n.image-right {\r\n  float: right;\r\n}\r\n\r\n.fwhite p {\r\n  margin-top: 31px;\r\n  font-size: 18px;\r\n}\r\n\r\n.cell-pad {\r\n  padding: 1px;\r\n}\r\n\r\n.main-body {\r\n  height: 250px;\r\n}\r\n\r\n.conversation-container {\r\n  margin: 0 0;\r\n  padding: 0px 5px 5px 0px;\r\n}\r\n\r\n.conversation-container span span {\r\n  margin-right: 15px;\r\n  float: right;\r\n}\r\n\r\n.body-color {\r\n  border: 1px solid #006666\r\n}\r\n\r\n.fyellow {\r\n  background: yellow;\r\n  min-height: 100px !important;\r\n}\r\n\r\n.fblue {\r\n  background: blue;\r\n  min-height: 100px !important;\r\n}\r\n\r\n.fblack {\r\n  background: black;\r\n  min-height: 100px !important;\r\n}\r\n\r\n.fwhite {\r\n  background: white;\r\n  height: 500px\r\n}\r\n\r\n.flvertical-line {\r\n  width: 3px;\r\n  background-color: #d0cdcd;\r\n}\r\n\r\n.fgray {\r\n  background: #f1f1f1;\r\n  height: 500px;\r\n  overflow-y: scroll;\r\n  z-index: 200;\r\n}\r\n\r\n.fcenter {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.fun-box {\r\n  background: #fa0078;\r\n  min-height: 20px;\r\n  padding: 19px;\r\n  margin-bottom: 20px;\r\n  border: 1px solid #e3e3e3;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\r\n}\r\n\r\n.fhr {\r\n  background: #d0cdcd;\r\n  height: 2px;\r\n}\r\n\r\n.fclear {\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n\r\n.fullscreen {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  overflow: auto;\r\n}\r\n\r\n#lower-part,\r\n#lower-part .row,\r\n#lower-part .fgray,\r\n#lower-part .fgray .container-fluid {\r\n  margin: 0 0;\r\n  padding: 0 0;\r\n}\r\n\r\n.user-cell {\r\n  margin: 0;\r\n  padding: 0\r\n}\r\n\r\n.user-cell img {\r\n  margin: 10px;\r\n}\r\n\r\n.user-cell:hover,\r\n.conversation-container:hover {\r\n  background: #ccccff;\r\n  cursor: default;\r\n}\r\n\r\n.user-cell:active,\r\n.conversation-container:active {\r\n  background: #cccccf\r\n}\r\n\r\n#detail-container {\r\n  margin: 0 0;\r\n  padding: 0 0;\r\n  overflow-y: scroll;\r\n\r\n}\r\n\r\n#detail-container .container-fluid {\r\n  margin: 0 0;\r\n  padding: 0 0;\r\n}\r\n\r\n#conversation-module {\r\n  background: white;\r\n  height: 500px;\r\n  padding: 20px;\r\n}\r\n\r\n.fheader h3 {\r\n  color: white;\r\n  font-size: 30px;\r\n  font-family: \"Bookman\", Georgia, \"Times New Roman\", serif\r\n}\r\n\r\n#sender-image {\r\n  margin-right: 10px;\r\n  margin-top: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n#my-image {\r\n  margin-right: 10px;\r\n  margin-top: 20px;\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n#text-from-sender {\r\n  margin: 38px auto;\r\n  font-size: 15px;\r\n}\r\n\r\n#text-from-me {\r\n  margin: 38px auto;\r\n  font-size: 15px;\r\n  float: right;\r\n}\r\n\r\n#time-sender {\r\n  margin: 38px auto;\r\n  font-size: 12px;\r\n}\r\n\r\n#time-my {\r\n  margin: 38px auto;\r\n  font-size: 12px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-5 col-md-5 col-sm-5 col-xs-5  col-lg-offset-4 col-md-offset-3 col-sm-offset-2 col-xs-offset-1 \">\r\n    <!--fblack-->\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 fheight150\"></div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12  fheader\"> <!--fred-->\r\n                <div class=\"container-fluid\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-3 \">\r\n                            <a href=\"/home\"><img src=\"http://127.0.0.1:8000/media/upload/logo.png\" class=\"logo\"\r\n                                                 width=\"70\" height=\"70\"></a>\r\n                        </div>\r\n                        <div class=\"col-lg-6 \">\r\n                            <h3>{{ headerMessage }}</h3>\r\n                        </div>\r\n                        <div class=\"col-lg-3 \">\r\n                            <div class=\"dropdown\" dropdown> <!-- {1} -->\r\n                                <span>{{ headerName }}</span>\r\n                                <img src=\"{{ headerImage }}\" class=\"img-circle\" width=\"60\" height=\"60\" dropdownToggle\r\n                                     role=\"button\"> <!-- {2} -->\r\n                                <ul *dropdownMenu class=\"dropdown-menu\"> <!-- {3} -->\r\n                                    <li><a (click)=\"load_inbox()\">Inbox</a></li>\r\n                                    <li><a (click)=\"load_home()\">Home</a></li>\r\n                                    <li role=\"separator\" class=\"divider\"></li>\r\n                                    <li role=\"separator\" class=\"divider\"></li>\r\n                                    <li><a (click)=\"logOut()\">Log out</a></li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row body-color\" [hidden]=\"!hidInbox\">\r\n            <div class=\"container-fluid\" id=\"lower-part\"> <!--fgreen-->\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 fgray \"> <!--fwhite-->\r\n                        <div class=\"container-fluid\">\r\n                            <div class=\"row\" *ngFor=\"let user of users\"\r\n                                 (click)=\"load_conversation_for_this_user($event, user)\">\r\n                                <div class=\"col-lg-12 user-cell\">\r\n                                    <img class=\"img-circle\" src=\"{{ user.image }}\" alt=\"Avatar\">\r\n                                    <span style=\"margin-left: 10px \">{{ user.username }}</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <!--  *****************-->\r\n                    <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8 fwhite\" id=\"detail-container\">\r\n                        <div class=\"container-fluid\">\r\n                            <div class=\"row\" *ngFor=\"let message of messages\">\r\n                                <div class=\"col-lg-12 conversation-container from-sender\">\r\n                                    <div class=\"container-fluid\">\r\n                                        <div class=\"row\" *ngIf=\"message.sender === selectedUserId\" >\r\n                                            <!-- sender part-->\r\n                                            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                                                <img class=\"img-circle\" src=\"{{ message.image }}\" alt=\"Avatar\"\r\n                                                     id=\"sender-image\">\r\n                                            </div>\r\n                                            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n                                                <p id=\"text-from-sender\">{{ message.text }}</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                                                <p id=\"time-sender\">{{ message.created_date | date:'hh:mm' }}</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"row\" *ngIf=\"message.sender != selectedUserId\">\r\n                                            <!-- recever part-->\r\n                                            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                                                <p id=\"time-my\">{{ message.created_date | date:'hh:mm' }}</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-8\">\r\n                                                <p id=\"text-from-me\">{{ message.text }}</p>\r\n                                            </div>\r\n                                            <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                                                <img class=\"img-circle\" src=\"{{ message.image }}\" alt=\"Avatar\"\r\n                                                     id=\"my-image\">\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n                    <!-- ********************** -->\r\n\r\n\r\n                </div>\r\n            </div>\r\n            <div style=\"background: #3c7673;height: 50px; padding-left: 252px;\">\r\n\r\n                <input type=\"text\" class=\"form-control\" style=\"border-radius: 0px; height: 50px\"\r\n                       #messageBox (keyup.enter)=\"sendMessage(messageBox.value);messageBox.value=''\"/>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"row\" [hidden]=\"hidInbox\" style=\"  border: 1px solid #0D3349; overflow: scroll\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 fwhite\" id=\"conversation-module\">\r\n                    <div class=\"row\" *ngFor=\"let conversation of inbox_conversations\">\r\n                        <div class=\"col-lg-12 conversation-container\" *ngIf=\"isNotEmptyObject(conversation.message )\" (click)=\"load_conversation_by_id(conversation.id)\">\r\n                            <img class=\"img-circle conversation-image\" src=\"{{ conversation.message.sender_image }}\"\r\n                                 alt=\"Avatar\">\r\n                            <span>{{ conversation.message.text }}</span>\r\n                            <br><span\r\n                                class=\"time-right\">{{ conversation.modified_date |  date:'MM/dd/yyyy:hh:mm' }}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row fheight100\">\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("../../../../../src/app/_services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_home_service__ = __webpack_require__("../../../../../src/app/_services/home.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_utils__ = __webpack_require__("../../../../../src/app/_helper/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(router, route, authService, zone, homeService, _formBuilder, storageService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.zone = zone;
        this.homeService = homeService;
        this._formBuilder = _formBuilder;
        this.storageService = storageService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.homeService.getAllUsers()
            .subscribe(function (response) {
            if (response.status == true && response.users.length > 0) {
                _this.users = response.users;
            }
            else {
            }
        });
        this.loggedInUser = this.authService.loggedinUser();
        this.headerImage = this.loggedInUser.image;
        this.headerName = this.loggedInUser.username;
        this.messageValue = '';
        this.hidInbox = true;
        this.headerMessage = "Chatting Room";
    };
    HomeComponent.prototype.load_inbox = function () {
        var _this = this;
        this.hidInbox = false;
        this.headerMessage = "Recent Conversations";
        this.homeService.getMyConversationInbox()
            .subscribe(function (response) {
            if (response.status == true) {
                _this.inbox_conversations = response.conversations;
                // this.messages = this.conversation.messages;
            }
            else {
            }
        });
    };
    HomeComponent.prototype.load_home = function () {
        var _this = this;
        this.hidInbox = true;
        this.headerMessage = "Chatting Room";
        var data = { "selectedUserId": this.selectedUserId };
        this.homeService.getIndividualConversation(data)
            .subscribe(function (response) {
            if (response.status == true) {
                _this.conversation = response.conversation;
                _this.messages = _this.conversation.messages;
            }
            else {
            }
        });
    };
    HomeComponent.prototype.load_conversation_for_this_user = function (event, user) {
        var _this = this;
        this.selectedUserId = user.id;
        // this.storageService.write(ChatUtils.SELECTED_USER_ID,user.id)
        var data = { "selectedUserId": this.selectedUserId };
        this.homeService.getIndividualConversation(data)
            .subscribe(function (response) {
            if (response.status == true) {
                _this.conversation = response.conversation;
                _this.messages = _this.conversation.messages;
            }
            else {
            }
        });
    };
    HomeComponent.prototype.sendMessage = function (value) {
        var _this = this;
        // let aMessage = new Message()
        // let receiver_id = this.storageService.read(ChatUtils.SELECTED_USER_ID)
        var receiver_id = this.selectedUserId;
        var text = value;
        var data = { "receiver_id": receiver_id, "text": text };
        this.homeService.sendMessage(data)
            .subscribe(function (response) {
            if (response.status == true) {
                _this.messages.push({ "text": text, "image": _this.loggedInUser.image });
            }
            else {
            }
        });
    };
    HomeComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logOut();
        this.zone.run(function () { return _this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__helper_utils__["a" /* default */].LOGIN]); });
    };
    HomeComponent.prototype.isNotEmptyObject = function (obj) {
        return !(obj && (Object.keys(obj).length === 0));
    };
    HomeComponent.prototype.load_conversation_by_id = function (conversationId) {
        var _this = this;
        var id = conversationId;
        var data = { "id": id };
        this.homeService.ConversationById(data)
            .subscribe(function (response) {
            if (response.status == true) {
                _this.hidInbox = true;
                _this.conversation = response.conversation;
                _this.messages = _this.conversation.messages;
                _this.selectedUserId = response.counterpart;
                _this.headerMessage = "Chatting Room";
            }
            else {
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__services_home_service__["a" /* HomeService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* { box-sizing:border-box; }\r\n\r\nbody {\r\n\tfont-family: Helvetica;\r\n\tbackground: #eee;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n\r\nhgroup { \r\n\ttext-align:center;\r\n\tmargin-top: 4em;\r\n}\r\n\r\nh1, h3 { font-weight: 300; }\r\n\r\nh1 { color: #636363; }\r\n\r\nh3 { color: #4a89dc; }\r\n\r\nform {\r\n\twidth: 380px;\r\n\tmargin: 4em auto;\r\n\tpadding: 3em 2em 2em 2em;\r\n\tbackground: #fafafa;\r\n\tborder: 1px solid #ebebeb;\r\n\tbox-shadow: rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px;\r\n}\r\n\r\n.group { \r\n\tposition: relative; \r\n\tmargin-bottom: 45px; \r\n}\r\n\r\ninput {\r\n\tfont-size: 18px;\r\n\tpadding: 10px 10px 10px 5px;\r\n\t-webkit-appearance: none;\r\n\tdisplay: block;\r\n\tbackground: #fafafa;\r\n\tcolor: #636363;\r\n\twidth: 100%;\r\n\tborder: none;\r\n\tborder-radius: 0;\r\n\tborder-bottom: 1px solid #757575;\r\n}\r\n\r\ninput:focus { outline: none; }\r\n\r\n\r\n/* Label */\r\n\r\nlabel {\r\n\tcolor: #999; \r\n\tfont-size: 18px;\r\n\tfont-weight: normal;\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tleft: 5px;\r\n\ttop: 10px;\r\n\ttransition: all 0.2s ease;\r\n}\r\n\r\n\r\n/* active */\r\n\r\ninput:focus ~ label, input.used ~ label {\r\n\ttop: -20px;\r\n  -webkit-transform: scale(.75);\r\n          transform: scale(.75); left: -2px;\r\n\t/* font-size: 14px; */\r\n\tcolor: #4a89dc;\r\n}\r\n\r\n\r\n/* Underline */\r\n\r\n.bar {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\r\n\r\n.bar:before, .bar:after {\r\n\tcontent: '';\r\n\theight: 2px; \r\n\twidth: 0;\r\n\tbottom: 1px; \r\n\tposition: absolute;\r\n\tbackground: #4a89dc; \r\n\ttransition: all 0.2s ease;\r\n}\r\n\r\n.bar:before { left: 50%; }\r\n\r\n.bar:after { right: 50%; }\r\n\r\n\r\n/* active */\r\n\r\ninput:focus ~ .bar:before, input:focus ~ .bar:after { width: 50%; }\r\n\r\n\r\n/* Highlight */\r\n\r\n.highlight {\r\n\tposition: absolute;\r\n\theight: 60%; \r\n\twidth: 100px; \r\n\ttop: 25%; \r\n\tleft: 0;\r\n\tpointer-events: none;\r\n\topacity: 0.5;\r\n}\r\n\r\n\r\n/* active */\r\n\r\ninput:focus ~ .highlight {\r\n\t-webkit-animation: inputHighlighter 0.3s ease;\r\n\t        animation: inputHighlighter 0.3s ease;\r\n}\r\n\r\n\r\n/* Animations */\r\n\r\n@-webkit-keyframes inputHighlighter {\r\n\tfrom { background: #4a89dc; }\r\n\tto \t{ width: 0; background: transparent; }\r\n}\r\n\r\n@keyframes inputHighlighter {\r\n\tfrom { background: #4a89dc; }\r\n\tto \t{ width: 0; background: transparent; }\r\n}\r\n\r\n\r\n/* Button */\r\n\r\n.button {\r\n  position: relative;\r\n  display: inline-block;\r\n  padding: 12px 24px;\r\n  margin: .3em 0 1em 0;\r\n  width: 100%;\r\n  vertical-align: middle;\r\n  color: #fff;\r\n  font-size: 16px;\r\n  line-height: 20px;\r\n  -webkit-font-smoothing: antialiased;\r\n  text-align: center;\r\n  letter-spacing: 1px;\r\n  background: transparent;\r\n  border: 0;\r\n  border-bottom: 2px solid #3160B6;\r\n  cursor: pointer;\r\n  transition: all 0.15s ease;\r\n}\r\n.button:focus { outline: 0; }\r\n\r\n\r\n/* Button modifiers */\r\n\r\n.buttonBlue {\r\n  background: #4a89dc;\r\n  text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);\r\n}\r\n\r\n.buttonBlue:hover { background: #357bd8; }\r\n\r\n\r\n/* Ripples container */\r\n\r\n.ripples {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: hidden;\r\n  background: transparent;\r\n}\r\n\r\n\r\n/* Ripples circle */\r\n\r\n.ripplesCircle {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n  border-radius: 50%;\r\n  background: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.ripples.is-active .ripplesCircle {\r\n  -webkit-animation: ripples .4s ease-in;\r\n          animation: ripples .4s ease-in;\r\n}\r\n\r\n\r\n/* Ripples animation */\r\n\r\n@-webkit-keyframes ripples {\r\n  0% { opacity: 0; }\r\n\r\n  25% { opacity: 1; }\r\n\r\n  100% {\r\n    width: 200%;\r\n    padding-bottom: 200%;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes ripples {\r\n  0% { opacity: 0; }\r\n\r\n  25% { opacity: 1; }\r\n\r\n  100% {\r\n    width: 200%;\r\n    padding-bottom: 200%;\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\nfooter { text-align: center; }\r\n\r\nfooter p {\r\n\tcolor: #888;\r\n\tfont-size: 13px;\r\n\tletter-spacing: .4px;\r\n}\r\n\r\nfooter a {\r\n\tcolor: #4a89dc;\r\n\ttext-decoration: none;\r\n\ttransition: all .2s ease;\r\n}\r\n\r\nfooter a:hover {\r\n\tcolor: #666;\r\n\ttext-decoration: underline;\r\n}\r\n\r\nfooter img {\r\n\twidth: 80px;\r\n\ttransition: all .2s ease;\r\n}\r\n\r\nfooter img:hover { opacity: .83; }\r\n\r\nfooter img:focus , footer a:focus { outline: none; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"container\">\r\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login_submit()\">\r\n        <h1 >Int-cHat</h1>\r\n      <div class=\"group\">\r\n        <input type=\"text\" formControlName=\"userName\" #refUserName placeholder=\" user name\"><span class=\"highlight\" ></span><span class=\"bar\"></span>\r\n\r\n        <div *ngIf=\"loginForm.controls['userName'].hasError('required') && refUserName.touched\" class=\"alert alert-danger\">\r\n            please enter user name\r\n        </div>\r\n        <div *ngIf=\"loginForm.controls['userName'].hasError('minlength')\" class=\"alert alert-danger\">\r\n            please enter at least 4 characters\r\n        </div>\r\n      </div>\r\n      <div class=\"group\">\r\n        <input type=\"password\" placeholder=\"password\" formControlName=\"password\" #refPassword ><span class=\"highlight\"></span><span class=\"bar\"></span>\r\n        <div *ngIf=\"loginForm.controls['password'].hasError('minlength')\" class=\"alert alert-danger\">\r\n            please enter at least 6 characters\r\n        </div>\r\n      </div>\r\n      <button type=\"submit\" class=\"button buttonBlue\" [disabled]=\"loginForm.invalid\">Login\r\n        <div class=\"ripples buttonRipples\"><span class=\"ripplesCircle\"></span></div>\r\n      </button>\r\n        <p class=\"text-danger\">{{ errorMessage }}</p>\r\n    </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_utils__ = __webpack_require__("../../../../../src/app/_helper/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(auth_service, _formBuilder, router, zone) {
        this.auth_service = auth_service;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.zone = zone;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this._formBuilder.group({
            userName: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(4)]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6)]],
        });
        this.errorMessage = "";
    };
    LoginComponent.prototype.login_submit = function () {
        var _this = this;
        this.auth_service.rest_login_call(this.loginForm.value.userName, this.loginForm.value.password).subscribe(function (resLogin) {
            if (resLogin.status == true) {
                _this.auth_service.authenticate(resLogin);
                _this.zone.run(function () { return _this.router.navigate([__WEBPACK_IMPORTED_MODULE_4__helper_utils__["a" /* default */].HOME]); });
            }
            else {
                console.log(resLogin.message);
                _this.errorMessage = resLogin.message;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
else {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map