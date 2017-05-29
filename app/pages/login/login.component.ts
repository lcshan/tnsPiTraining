import { Page } from 'tns-core-modules/ui/page';
import { UserHelper } from './../../shared/helpers/user.helper';
import { Component, OnInit } from "@angular/core";
import { loginModel } from '../../shared/models/loginModel';
import { LoginService } from '../../shared/services';
import { GlobalState } from '../../global.state';
import { APP_EVENTS } from '../../events';
import { Router } from "@angular/router";
@Component({
    moduleId: module.id,
    selector: "my-login",
    templateUrl: './login.html',
    providers: [LoginService],
    styleUrls: ["./login-common.css", "./login.css"]

})
export class LoginComponent implements OnInit {
    // Your TypeScript logic goes here
    private isLoading = false;
    ngOnInit() {
        this.page.actionBarHidden = true;
    }
    loginModel: loginModel;
    constructor(
        private loginService: LoginService
        , private globalState: GlobalState
        , private userHelper: UserHelper
        , private router: Router
        , private page: Page
    ) {
        this.loginModel = new loginModel();
    }
    submit() {
        this.isLoading = true;
        this.loginService.login(this.loginModel).subscribe(
            user => {
                this.globalState.notifyDataChanged(APP_EVENTS.TENANT_CHANGED, user);
                this.userHelper.updateUser(user);
                console.dir(user);
                this.isLoading = false;
                this.router.navigate(["/my-modules-list"]);
            }, error => {
                this.isLoading = false;
                alert('login failed');
            });
    }
}
