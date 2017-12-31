import {Injectable} from "@angular/core";
import ChatUtils from "../_helper/utils";
import {ApiService} from "./api.service";
import {StorageService} from "./storage.service";

@Injectable()
export class HomeService {
  private REST_GET_USERS: string;
  private REST_GET_INDIVIDUAL_CONVERSATION :string;

  constructor(private api: ApiService, private storageService: StorageService) {
    this.REST_GET_USERS = ChatUtils.API_REST_ALL_USER;
    this.REST_GET_INDIVIDUAL_CONVERSATION = ChatUtils.API_GET_INDIVIDUAL_CONVERSATION;
  }

  getAllUsers() {
    return this.api.call(this.REST_GET_USERS, ChatUtils.GET_REQUEST_WITH_TOKEN)
  }

  getIndividualConversation(data) {
    return this.api.call(this.REST_GET_INDIVIDUAL_CONVERSATION, ChatUtils.POST_REQUEST_WITH_TOKEN,data)
  }
  sendMessage(data)
  {
    return this.api.call(ChatUtils.REST_SEND_MESSAGE, ChatUtils.POST_REQUEST_WITH_TOKEN,data)
  }
}
