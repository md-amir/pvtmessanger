import {Injectable} from "@angular/core";
import ChatUtils from "../_helper/utils";
import {ApiService} from "./api.service";
import {StorageService} from "./storage.service";

@Injectable()
export class HomeService {
  private REST_GET_USERS: string;
  private REST_GET_INDIVIDUAL_CONVERSATION :string;
  private REST_GET_MY_CONVERSATIONS_INBOX: string;
  private REST_GET_CONVERSATIONS_BY_ID: string;

  constructor(private api: ApiService, private storageService: StorageService) {
    this.REST_GET_USERS = ChatUtils.API_REST_ALL_USER;
    this.REST_GET_INDIVIDUAL_CONVERSATION = ChatUtils.API_GET_INDIVIDUAL_CONVERSATION;
    this.REST_GET_MY_CONVERSATIONS_INBOX = ChatUtils.REST_GET_MY_CONVERSATIONS_INBOX
    this.REST_GET_CONVERSATIONS_BY_ID = ChatUtils.REST_GET_CONVERSATION_BY_ID
  }

  public getAllUsers() {
    return this.api.call(this.REST_GET_USERS, ChatUtils.GET_REQUEST_WITH_TOKEN)
  }

  public getIndividualConversation(data) {
    return this.api.call(this.REST_GET_INDIVIDUAL_CONVERSATION, ChatUtils.POST_REQUEST_WITH_TOKEN,data)
  }

  public sendMessage(data)
  {
    return this.api.call(ChatUtils.REST_SEND_MESSAGE, ChatUtils.POST_REQUEST_WITH_TOKEN,data)
  }
  public getMyConversationInbox() {
    return this.api.call(this.REST_GET_MY_CONVERSATIONS_INBOX, ChatUtils.GET_REQUEST_WITH_TOKEN)
  }

  public ConversationById(data) {
     return this.api.call(this.REST_GET_CONVERSATIONS_BY_ID, ChatUtils.POST_REQUEST_WITH_TOKEN,data)
  }
}
