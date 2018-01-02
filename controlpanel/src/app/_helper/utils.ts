import { RequestOptions, Headers } from '@angular/http';

export default class ChatUtils {

    /**
     * Different url for rest api
     */

    static BASE_URL = 'http://localhost:8000';
    static API_REST_LOGIN = ChatUtils.BASE_URL+ '/accounts/api/v1/login';
    static API_REST_ALL_USER = ChatUtils.BASE_URL+ '/accounts/api/v1/users';
    static API_GET_INDIVIDUAL_CONVERSATION = ChatUtils.BASE_URL+ '/chat/api/v1/individual/conversation';
    static REST_GET_MY_CONVERSATIONS_INBOX = ChatUtils.BASE_URL+ '/chat/api/v1/my/conversations';
    static REST_GET_CONVERSATION_BY_ID = ChatUtils.BASE_URL + '/chat/api/v1/conversation/byid';
    static REST_SEND_MESSAGE = ChatUtils.BASE_URL + '/chat/api/v1/send/message';

    //FOR web CLIENT
    static BASE = '';
    static LOGIN = 'login';
    static HOME = 'home';

    /**
     * constants
     *
     */

    // keys
    static REFERRAL_TYPE_KEY = 'referral_type';
    static REFERRAL_TOKEN_KEY = "referral_token_key";
    static SELECTED_USER_ID = "selected_user_id"


    // values
    static IS_LOGGED_IN = 'isLoggedIn';
    static LOGIN_RESPONSE = 'loginResponse';
    static USER = 'user';
    static TOKEN = 'token';
    static GET_REQUEST_WITHOUT_TOKEN = 1;
    static GET_REQUEST_WITH_TOKEN = 2;
    static POST_REQUEST_WITHOUT_TOKEN = 3;
    static POST_REQUEST_WITH_TOKEN = 4;
    static POST_REQUEST_FOR_FILE_UPLOAD = 5;



    // methods for uploading data for pre processing
    static prepare_file_upload(event, file_name, companyId, storageService) {
        let fileList = event.target.files;
        let formData = new FormData();

        if (fileList.length > 0) {
            let file = fileList[0];
            let headers = new Headers();
            let token = <string>storageService.read(ChatUtils.TOKEN);
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
            let token = <string>storageService.read(ChatUtils.TOKEN);
            headers.append("Authorization", 'Token ' + token)
            headers.append('Accept', 'application/json');
            let options = new RequestOptions({ headers: headers });
            return { formData: formData, options: options }

    }

}
