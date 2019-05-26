import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';
import { AlunoComponent } from './aluno.component';
import { AlunoService } from './aluno.service';



@NgModule({
    declarations: [ 
        AlunoComponent,
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
export class AlunoModule { }