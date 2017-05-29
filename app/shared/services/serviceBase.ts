import { UserHelper } from './../helpers/user.helper';
import { ApiEndpointSetting } from './../settings/apiEndpoint.setting';

import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { AjaxAnimationHelper, MessageHelper, UserHelper } from './helpers/index';
import '../../rxjs-operator'
@Injectable()
export class ServiceBase {
    private api_path = ApiEndpointSetting.API_PATH;
    private requestionOptions: RequestOptions;
    private tenancyId: number;
    constructor(private http: Http, 
        // private ajaxAnimationHelper: AjaxAnimationHelper,
        private localUserHelper: UserHelper,
        // private messageHelper: MessageHelper
        ) {
        this.initRequestionOption();
        let me = this;
        this.localUserHelper.subscribeUserChange(user => {
            // console.log('local user updated:',user);
            if (user) {
                me.tenancyId = user.TenantId;
                me.initRequestionOption();
            }
        })
    }
    private getJson = (resp: Response) => {
        return resp.json().Data;
    }

    initRequestionOption = () => {
        let user = this.localUserHelper.getUser();
        let token = '';
        if (user) {
            token = user.Token || '';
            this.tenancyId = user.TenantId || 0;
        }
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + token);
        this.requestionOptions = new RequestOptions({ headers: headers });
    }
    private checkForError = (res: Response) => {
        // this.ajaxAnimationHelper.finishLoading();
        if (res.status >= 200 && res.status < 300) {
            return res;
        }
        else {
            // this.messageHelper.error("operation failed, please try again");
            const error = new Error(res.statusText);
            error['response'] = res;

            throw error;
        }
    }

    private catchErr = (err) => {
        // this.ajaxAnimationHelper.finishLoading();
        return Observable.throw(err);
    }
    get = (path: string): Observable<any> => {
        // this.ajaxAnimationHelper.startLoading();
        return this.http.get(`${this.api_path}${path}`, this.requestionOptions)
            .map(this.checkForError)
            .catch(this.handleError)
            .map(this.getJson);
    }

    put = (path: string, body: any): Observable<any> => {
        // this.ajaxAnimationHelper.startLoading();
        body = body || {};
        let tenantId = this.tenancyId;
        if (!(body.tenantId || body.TenantId))
            body = Object.assign(body, { tenantId });
        return this.http.put(`${this.api_path}${path}`, body, this.requestionOptions)
            .map(this.checkForError)
            .catch(this.catchErr)
            .map(this.getJson);

    }

    post = (path: string, body?: any): Observable<any> => {
        // this.ajaxAnimationHelper.startLoading();
        // if(!body)
        body = body || {};
        let tenantId = this.tenancyId;
        // console.log(this.tenancyId);
        if (!(body.tenantId || body.TenantId))
            body = Object.assign(body, { tenantId });
        // console.log('post body:',body);
        return this.http.post(`${this.api_path}${path}`, body, this.requestionOptions)
            .map(this.checkForError)
            .catch(this.handleError)
            .map(this.getJson);
    }

    delete = (path: string): Observable<any> => {
        // this.ajaxAnimationHelper.startLoading();
        
        return this.http.delete(`${this.api_path}${path}`, this.requestionOptions)
            .map(this.checkForError)
            .catch(this.handleError)
            .map(this.getJson);
    }

    private handleError = (error: Response | any) => {
        let me = this;
        // me.ajaxAnimationHelper.finishLoading();
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            // me.messageHelper.error(error.statusText);
            // this.messageHelper.showError(err.details, err.message);
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}