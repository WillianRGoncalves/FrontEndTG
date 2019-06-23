import { CursoPesquisa } from '../cursos/cursopesquisa';

export interface Usuario {
    nome: string;
    tipoUsuario: string;
    curso: CursoPesquisa
}