import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentasTarjetas } from '../cuentas-tarjetas-layout/cuentas-tarjetas.interface';

@Component({
    selector: 'app-accounts-section',
    templateUrl: './accounts-section.component.html',
    styleUrls: ['./accounts-section.component.scss'],
})

export class AccountsSectionComponent {

    titulo: string = 'Cuentas';
    layout: string = 'flex';
    imagen: string = '../../../../../assets/icons/flexMode.png';
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

    cambiaLayout() {
        if (this.layout == 'flex') {
            this.layout = 'grid';
            this.imagen = '../../../../../assets/icons/gridMode.png';
        } else {
            this.layout = 'flex';
            this.imagen = '../../../../../assets/icons/flexMode.png';
        }
    }

}









// import { Component } from '@angular/core';
// import { CuentasTarjetasService } from '../cuentas-tarjetas.service';

// @Component({
//     selector: 'app-accounts-section',
//     templateUrl: './accounts-section.component.html',
//     styleUrls: ['./accounts-section.component.scss'],
// })
// export class AccountsSectionComponent {
//     titulo: string = 'Cuentas';
//     layout: string = 'flex';

//     constructor(private dataService: CuentasTarjetasService) { }

//     // get Data(): RESTCountriesResponse {
//     get Data(): any {
//         return this.dataService;
//     }

//     cambiaLayout() {
//         if (this.layout == 'flex') {
//             this.layout = 'grid';
//         } else {
//             this.layout = 'flex';
//         }
//     }

//     ngOnInit(): void { }
// }

