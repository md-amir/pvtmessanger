import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../_services/storage.service";
import {HomeService} from "../_services/home.service";
import {AuthenticationService} from "../_services/authentication.service";
import ChatUtils from "../_helper/utils";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  users: any;
  conversation: any;
  inbox_conversations: any;
  messages: any;
  options: any;
  errorMessage: string;
  selectedUserId: number;
  loggedInUser: any;
  headerImage: string;
  headerName: string;
  headerMessage: string;
  messageValue: string;
  hidInbox: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthenticationService,
              private zone: NgZone,
              private homeService: HomeService,
              private _formBuilder: FormBuilder,
              private storageService: StorageService) {
  }

  ngOnInit() {
    this.homeService.getAllUsers()
      .subscribe(response => {
        if (response.status == true && response.users.length > 0) {
          this.users = response.users;

        } else {

        }
      });
    this.loggedInUser = this.authService.loggedinUser();
    this.headerImage = this.loggedInUser.image;
    this.headerName = this.loggedInUser.username;
    this.messageValue = '';
    this.hidInbox = true;
    this.headerMessage = "Chatting Room";
  }

  public load_inbox() {
    this.hidInbox = false;
    this.headerMessage = "Recent Conversations";
    this.homeService.getMyConversationInbox()
      .subscribe(response => {
        if (response.status == true) {
          this.inbox_conversations = response.conversations;
          // this.messages = this.conversation.messages;
        } else {
        }
      });
  }

  public load_home() {
    this.hidInbox = true;
    this.headerMessage = "Chatting Room";

    let data = {"selectedUserId": this.selectedUserId};
    this.homeService.getIndividualConversation(data)
      .subscribe(response => {
        if (response.status == true) {
          this.conversation = response.conversation;
          this.messages = this.conversation.messages;
        } else {
        }
      });
  }

  public load_conversation_for_this_user(event, user) {
    this.selectedUserId = user.id;
    // this.storageService.write(ChatUtils.SELECTED_USER_ID,user.id)
    let data = {"selectedUserId": this.selectedUserId};
    this.homeService.getIndividualConversation(data)
      .subscribe(response => {
        if (response.status == true) {
          this.conversation = response.conversation;
          this.messages = this.conversation.messages;
        } else {
        }
      });
  }


  public sendMessage(value: string) {
    // let aMessage = new Message()
    // let receiver_id = this.storageService.read(ChatUtils.SELECTED_USER_ID)
    let receiver_id = this.selectedUserId;
    let text = value;


    let data = {"receiver_id": receiver_id, "text": text};
    this.homeService.sendMessage(data)
      .subscribe(response => {
        if (response.status == true) {
          this.messages.push({"text": text, "image": this.loggedInUser.image})
        } else {
        }
      });


  }


  public logOut() {
    this.authService.logOut();
    this.zone.run(() => this.router.navigate([ChatUtils.LOGIN]));
  }


  isNotEmptyObject(obj) {
    return !(obj && (Object.keys(obj).length === 0));
  }


  public load_conversation_by_id(conversationId) {
    let id = conversationId
    let data = {"id": id}

    this.homeService.ConversationById(data)
      .subscribe(response => {
        if (response.status == true) {
          this.hidInbox = true;
          this.conversation = response.conversation;
          this.messages = this.conversation.messages;
          this.selectedUserId = response.counterpart;
          this.headerMessage = "Chatting Room";
        } else {
        }
      });
  }
}
