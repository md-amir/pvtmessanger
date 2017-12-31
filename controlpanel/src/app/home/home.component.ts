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
  messages: any;
  options: any;
  errorMessage: string;
  selectedUserId: number;
  loggedInUser: any;
  headerImage:string;
  headerName:string;
  messageValue:string;
  // sendForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthenticationService,
              private zone: NgZone,
              private homeService: HomeService,
               private _formBuilder: FormBuilder,
              private storageService:StorageService) {
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
  }

  public load_conversation(event, user) {
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

  public sendMessage(value: string){
    // let receiver_id = this.storageService.read(ChatUtils.SELECTED_USER_ID)
    let receiver_id =this.selectedUserId;
    let text = value;
    let data = {"receiver_id": receiver_id, "text":text};
    this.homeService.sendMessage(data)
      .subscribe(response => {
        if (response.status == true) {

        } else {
        }
      });


  }

  public logOut(){
    this.authService.logOut();
    this.zone.run(() => this.router.navigate([ChatUtils.LOGIN]));
  }


}
