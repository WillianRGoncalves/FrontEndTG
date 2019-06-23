import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { HomefuncionarioComponent } from './homefuncionario.component';




@NgModule({
    declarations: [ 
        HomefuncionarioComponent,
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        
    ],
    providers: [
        
    ]
})
export class HomeFuncionarioModule { }