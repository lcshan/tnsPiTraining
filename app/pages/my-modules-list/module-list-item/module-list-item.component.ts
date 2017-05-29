import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'module-list-item',
    templateUrl: './module-list-item.component.html',
    styleUrls:["./module-list-item.css"]
})
export class ModuleListItemComponent implements OnInit {
    expand: boolean = false;

    @Input() module: Training.Module;
    constructor() {
        console.log('module-list-item constructor');
    }

    ngOnInit() {

    }

    // labelTap(module: Training.Module) {
    //     this.expand = !this.expand;
    // }

}