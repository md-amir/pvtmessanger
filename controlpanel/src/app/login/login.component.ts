import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import ChatUtils from '../_helper/utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage:string

  constructor(
    private auth_service: AuthenticationService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private zone: NgZone,) { }

    ngOnInit() {
      this.loginForm = this._formBuilder.group({
        userName: [null, [Validators.required, Validators.minLength(4)]],
        password: [null, [Validators.required, Validators.minLength(6)]],
      });
      this.errorMessage=""
  }


  login_submit() {


    this.auth_service.rest_login_call(this.loginForm.value.userName, this.loginForm.value.password).subscribe(
      resLogin => {
        if (resLogin.status == true) {
          this.auth_service.authenticate(resLogin)
          this.zone.run(() => this.router.navigate([ChatUtils.HOME]));

        } else {
          console.log(resLogin.message)
          this.errorMessage = resLogin.message
        }

      }
    )
  }

}
