import { MyModulesComponentList } from './pages/my-modules-list/my-modules-list.component';
import { LoginComponent } from "./pages/login/login.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "my-modules-list", component: MyModulesComponentList}
];

export const navigatableComponents = [
  LoginComponent,MyModulesComponentList
];