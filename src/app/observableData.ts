import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalFooService {

    private sexo = new Subject<string>();
    private orientacao = new Subject<[]>();

    postSexo(data: string) {
        this.sexo.next(data);
    }

    getSexo(): Subject<string> {
        return this.sexo;
    }

    postOrientacao(data: []) {
        this.orientacao.next(data);
    }

    getOrientacao(): Subject<[]> {
        return this.orientacao;
    }
}