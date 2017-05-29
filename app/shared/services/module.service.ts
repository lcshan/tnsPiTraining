import { ServiceBase } from './serviceBase';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModuleService {

    constructor(private service: ServiceBase) { }

    private readonly moduleApiPath = '/api/Modules';
    // getModules(): Observable<Training.Module[]> {
    //     return this.service.get(this.moduleApiPath);
    // }

    getModules() :Observable<Training.Module[]>{
        let url = this.moduleApiPath+'/GetTenancyModules'
        return this.service.post(url);
    }

    getModule(id: number):Observable<Training.Module> {
        var url = this.moduleApiPath + '/' + id;
        return this.service.get(url);
    }
    addModule(module: Training.Module): Observable<Training.Module> {
        return this.service.post(this.moduleApiPath, module);
    }
    updateModule(id: number, module: Training.Module): Observable<Training.Module> {
        var url = this.moduleApiPath + '/' + id;
        return this.service.put(url, module);
    }
    deleteModule(id: number): Observable<Training.Module> {
        var url = this.moduleApiPath + '/' + id;
        return this.service.delete(url);
    }

}