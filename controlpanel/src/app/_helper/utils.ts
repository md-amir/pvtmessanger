import { RequestOptions, Headers } from '@angular/http';

export default class FunUtils {

    /**
     * Different url
     */

    // static  BASE_URL = 'https://fundle.io';
    static BASE_URL = 'http://localhost:8000';
    // static BASE_URL = 'http://dev.fundle.io';

    // FOR APIS
    static API_REST_LOGIN = '/api/user/login';
    static API_GOOGLE_LOGIN = '/api/google/login';
    static API_FACEBOOK_LOGIN = '/api/facebook/login';
    static API_FORGOT_PASSWORD = '/api/v1/accounts/forgotpassword';
    static API_RESET_PASSWORD = '/api/v1/accounts/resetpassword';
    static API_EMAIL_VERIFICATION = '/api/v1/accounts/email/verification?';
    static API_SIGN_UP = '/api/fundle/signup';
    static API_BUSINESS_TYPE = '/api/v1/accounts/get/business/types';
    static API_CREATE_COMPANY = FunUtils.BASE_URL + '/api/v1/accounts/create/company';
    static API_MY_COMPANIES = FunUtils.BASE_URL + '/api/v1/accounts/my/companies';
    static API_MY_COMPANY_BY_ID = FunUtils.BASE_URL + '/api/v1/accounts/company/details';
    static API_COMPANY_MEDIA_UPLOAD = FunUtils.BASE_URL + '/api/v1/accounts/company/media';
    static API_COMPANY_ADD_PRODUCT = FunUtils.BASE_URL + '/api/v1/accounts/company/add/product';
    // selfie apis
    static API_GET_MY_FRAMES = FunUtils.BASE_URL + '/api/v1/selfie/my/frames';
    static API_CREATE_FRAME = FunUtils.BASE_URL + '/api/v1/selfie/create/frame';
    static API_GET_FRAME_TYPES = FunUtils.BASE_URL + '/api/v1/selfie/frame/types';



    //FOR CLIENT
    static BASE = '';
    static LOGIN = 'login';
    static FUNDLE_REFERRAL = 'fundle/referral';
    static SIGN_UP = 'signup';
    static SIGN_UP_CHOOSE = 'signup/choose';
    static FORGOT_PASSWORD = 'forgot/password';
    static RESET_PASSWORD_OPTION = 'reset/password/option';
    static RESET_PASSWORD = 'reset/password';
    static HOME = 'home';
    static CREATE_COMPANY = 'create/company';
    static CREATE_FRAME = 'create/frame';
    static COMPANY = 'company';
    static COMPANY_DETAILS = 'company/:companyId';
    static COMPANY_FILE_UPLOAD = 'company/file/:companyId';
    static COMPANY_PRODUCT = 'company/product/:companyId';
    static COMPANY_FRAMES = 'my/frames';



    /**
     * Different constant
     * 
     */

    // keys
    static REFERRAL_TYPE_KEY = 'referral_type';
    static REFERRAL_TOKEN_KEY = "referral_token_key";
    static RESET_PARAM_KEY = "reset_param";
    static VERIFICATION_RESPONSE_KEY = "verification_key";
    static COMPANY_DETAIL_KEY = "company_details";


    // values
    static REFERRAL_TYPE_FACEBOOK_VALUE = "facebook";
    static REFERRAL_TYPE_GOOGLE_VALUE = "google";


    static IS_LOGGED_IN = 'isLoggedIn';
    static LOGIN_RESPONSE = 'loginResponse';
    static USER = 'user';
    static TOKEN = 'token';
    static GET_REQUEST_WITHOUT_TOKEN = 1;
    static GET_REQUEST_WITH_TOKEN = 2;
    static POST_REQUEST_WITHOUT_TOKEN = 3;
    static POST_REQUEST_WITH_TOKEN = 4;
    static POST_REQUEST_FOR_FILE_UPLOAD = 5;



    // methods
    static prepare_file_upload(event, file_name, companyId, storageService) {
        let fileList = event.target.files;
        let formData = new FormData();

        if (fileList.length > 0) {
            let file = fileList[0];
            let headers = new Headers();
            let token = <string>storageService.read(FunUtils.TOKEN);
            formData.append(file_name, file, file.name);
            formData.append('companyId', "" + companyId);
            headers.append("Authorization", 'Token ' + token)
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ headers: headers });
            return { formData: formData, options: options }
        }
    }

    static prepare_file_upload1(formData,storageService) {
        
            let headers = new Headers();
            let token = <string>storageService.read(FunUtils.TOKEN);
            headers.append("Authorization", 'Token ' + token)
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ headers: headers });
            return { formData: formData, options: options }
        
    }

}