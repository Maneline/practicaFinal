import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentasTarjetas } from '../cuentas-tarjetas-layout/cuentas-tarjetas.interface';

@Component({
    selector: 'app-cards-section',
    templateUrl: './cards-section.component.html',
    styleUrls: ['./cards-section.component.scss']
})

export class CardsSectionComponent {

    titulo: string = 'Tarjetas';

    datos!: CuentasTarjetas;

    private _jsonURL = '../../../../../assets/data/cuentas.json';

    constructor(private http: HttpClient) {

        this.getJSON().subscribe(data => {
            this.datos = data;
        });

    }

    get Data(): CuentasTarjetas {
        return this.datos;
    }

    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

}


