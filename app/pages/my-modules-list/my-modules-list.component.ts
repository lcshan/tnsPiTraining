import { ModuleService } from './../../shared/services/module.service';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-modules-list',
    templateUrl: 'my-modules-list.component.html',
    styleUrls: ["./my-modules-list.css"],
    providers: [ModuleService]
})
export class MyModulesComponentList implements OnInit {
    modules: Training.Module[];
    isLoading: boolean = false;
    listLoaded: boolean = false;
    ngOnInit() {

    }
    constructor(
        private service: ModuleService
    ) {
        this.isLoading = true;

        this.service.getModules().subscribe(modules => {
            this.modules = modules;
            this.isLoading = false;
            this.listLoaded = true;
            console.dir(modules);
        });


    }

    onModuleTapped(args) {
        console.log('item tapped');
        console.dir(args);
    }

    labelTap(item) {
        
    }



}