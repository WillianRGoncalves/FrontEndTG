import { ValidatorFn, FormGroup } from "@angular/forms";

export const nomeUsuariosenha: ValidatorFn = (formGroup: FormGroup) => {
    const nomeUsuario = formGroup.get('nomeUsuario').value;
    const senha = formGroup.get('senha').value;

    if(nomeUsuario.trim() + senha.trim()) {
        return nomeUsuario != senha 
        ? null 
        : { nomeUsuariosenha: true };
    } else {
        return null;
    }
};