import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GlobalFooService {

    private sexo = new Subject<string>();
    private orientacao = new Subject<[]>();

    postSexo(data: any) {
        this.sexo.next(data);
    }

    getSexo(): Subject<any> {
        return this.sexo;
    }

    postOrientacao(data: any) {
        this.orientacao.next(data);
    }

    getOrientacao(): Subject<any> {
        return this.orientacao;
    }
}