import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { RouterModule } from '@angular/router';

import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeFuncionarioRoutingModule } from './homefuncionario.routing.module';
import { HomeFuncionarioComponent } from './homefuncionario.component';

@NgModule({
    declarations: [ 
        PedidosComponent,
        HomeFuncionarioComponent
    ],
    imports: [ 
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        RouterModule,
        HomeFuncionarioRoutingModule,
        
    ]
})
export class HomeFuncionarioModule { }