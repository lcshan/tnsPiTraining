import { User } from './../models/user';
import { APP_EVENTS } from './../../events';
import { GlobalState } from './../../global.state';
import { Injectable } from '@angular/core';
@Injectable()
export class UserHelper {
    private curruntUser: Training.User;
    constructor(private globalState: GlobalState) {

    }
    updateUser(user: Training.User) {
        this.curruntUser = user;
        let tenant = user ? user.Tenant : null;
        this.globalState.notifyDataChanged(APP_EVENTS.TENANT_CHANGED, tenant);
        this.globalState.notifyDataChanged(APP_EVENTS.USER_CHANGED, user);
    }
    getUser(){
        return this.curruntUser;    
    }
    subscribeUserChange(callback: Function) {
        this.globalState.subscribe(APP_EVENTS.USER_CHANGED, callback);
    }
}