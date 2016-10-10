import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Marca } from '../models/marca';

@Injectable()
export class MarcaProvider {

    apiUrl = "http://localhost:3000";

    constructor(public http: Http) { }

    //carrega todas marcas
    findAll(): Observable<Marca[]> {
        return this.http.get(`${this.apiUrl}/marca`)
            .map(res => <Marca[]>res.json());
    }

}