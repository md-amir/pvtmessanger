import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "app/_services/authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth_service: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth_service.isLoggedIn()) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    } 
}