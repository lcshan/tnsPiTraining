import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { AppComponent } from "./app.component";
import { LoginService } from './shared/services';
import { NativeScriptHttpModule } from "nativescript-angular/http";
@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,NativeScriptFormsModule,NativeScriptHttpModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
