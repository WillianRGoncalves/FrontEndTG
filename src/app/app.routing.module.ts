import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthGuard } from './core/auth/auth.guard';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AcompanhamentotrabalhoComponent } from './acompanhamentotrabalho/acompanhamentotrabalho.component';
import { HomeFuncionarioComponent } from './homefuncionario/homefuncionario.component';
import { CadastroFuncionarioComponent } from './cadastrofuncionario/cadastrofuncionario.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    { 
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    { 
        path: 'aluno',
        component: AlunoComponent
    }, 
    { 
        path: 'funcionario',
        loadChildren: './homefuncionario/homefuncionario.module#HomeFuncionarioModule'
    },   
    { 
        path: 'cadastroprofessores',
        component: CadastroFuncionarioComponent
    },     
    { 
        path: 'acompanhamento',
        component: AcompanhamentotrabalhoComponent
    },              
    { 
        path: 'error', 
        component: GlobalErrorComponent,
        data: {
            title: 'Error'
        }
    },      
    { 
        path: 'not-found', 
        component: NotFoundComponent,
        data: {
            title: 'Not found'
        }
    },       
    { 
        path: '**', 
        redirectTo: 'not-found'
    }  
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, { useHash: true } ) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

