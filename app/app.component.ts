import { Component } from "@angular/core";
import { loginModel } from './shared/models/loginModel';
import { LoginService } from './shared/services'
@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Training"></ActionBar>
    <!-- Your UI components go here -->
    <StackLayout>
    <TextField hint="Tenancy Name"  [(ngModel)]="loginModel.tenancyName"
      autocorrect="false" autocapitalizationType="none"></TextField>
    <TextField hint="Email Address" keyboardType="email" [(ngModel)]="loginModel.usernameOrEmailAddress"
      autocorrect="false" autocapitalizationType="none" ></TextField>
    <TextField hint="Password" secure="true" [(ngModel)]="loginModel.password"></TextField>

    <Button text="Sign in" class="submit-button" (tap)="submit()"></Button>
  </StackLayout>
  `,
    styleUrls:["pages/login/login-common.css","pages/login/login.css"],
    providers:[LoginService]

})
export class AppComponent {
  // Your TypeScript logic goes here
  loginModel:loginModel;
  constructor( private loginService:LoginService){
    this.loginModel= new loginModel();
  }
  submit(){
    this.loginService.login(this.loginModel).subscribe(user=>console.dir(user));
  }
}
