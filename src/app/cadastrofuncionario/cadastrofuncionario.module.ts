import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { CadastroFuncionarioComponent } from './cadastrofuncionario.component';




@NgModule({
    declarations: [ 
        CadastroFuncionarioComponent,
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
export class CadastroFuncionarioModule { }