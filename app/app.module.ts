import { ModuleListItemComponent } from './pages/my-modules-list/module-list-item/module-list-item.component';
import { ServiceBase } from './shared/services/serviceBase';
import { UserHelper } from './shared/helpers/user.helper';
import { GlobalState } from './global.state';
import { NgModule } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.route";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    ModuleListItemComponent,
    ...navigatableComponents
  ],
  providers:[GlobalState,UserHelper,ServiceBase],
  bootstrap: [AppComponent]
})
export class AppModule {}