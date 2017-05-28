import { Injectable } from '@angular/core';
import { loginModel } from '../models';
import { User } from '../models/user'
import { ApiEndpointSetting } from '../settings';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
    private loginEndPoint = ApiEndpointSetting.AUTH_PATH;
    private requestionOptions: RequestOptions;

    constructor(private http: Http) {

    }

    login = (loginModel: loginModel): Observable<any> => {
        let me = this;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });

        let url = ApiEndpointSetting.AUTH_PATH + '/Authenticate';
        return this.http.post(url, loginModel, options)
            .switchMap(prop => {
                let userUrl = ApiEndpointSetting.API_PATH + '/api/Users';
                let user = this.extractData(prop);
                let headers = new Headers();
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', 'Bearer ' + prop.json().result);
                this.requestionOptions = new RequestOptions({ headers: headers });

                return this.http.post(userUrl, user, this.requestionOptions)
                    .map(res => {
                        let trainingUer: User = res.json().Data;
                        trainingUer.Token = prop.json().result;
                        // me.userHelper.setUser(trainingUer);
                        // me.ajaxAnimationHelper.finishLoading();
                        return trainingUer;
                    })
                    .catch(this.handleError)

            })
            .catch(this.handleError);
    }

    private extractData = (res: Response):any => {
        let jsonObj = res.json();
        var user = new User();
        user.AuthUserId = jsonObj.id;
        user.TenantId = jsonObj.tenancyId;
        user.UserName = jsonObj.userName;
        user.Roles = jsonObj.roles;
        user.CompanyName=jsonObj.tenantName;
        return user;
    }

     private handleError = (error: Response | any) => {
         console.log('inside error');
        let me = this;
        // me.ajaxAnimationHelper.finishLoading();
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            // me.messageHelper.error(err.details, err.title);
            // this.messageHelper.showError(err.details, err.message);
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.info(errMsg);
        return Observable.throw(errMsg);
    }
}