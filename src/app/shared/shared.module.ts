import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot()
    ],
    exports: [
        CommonModule,
        NgbModule
    ]
})
export class SharedModule { }
