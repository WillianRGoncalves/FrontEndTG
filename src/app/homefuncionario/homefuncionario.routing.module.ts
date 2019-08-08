import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeFuncionarioComponent } from './homefuncionario.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
    { 
        path: '',
        component: HomeFuncionarioComponent,
        children: [
            { 
                path: '',
                component: PedidosComponent,
                data: {
                    title: 'Pedido'
                }
            },            
        ]
    },              
];

@NgModule({
    imports: [ 
        RouterModule.forChild(routes) 
    ],
    exports: [ RouterModule ]
})
export class HomeFuncionarioRoutingModule { }

