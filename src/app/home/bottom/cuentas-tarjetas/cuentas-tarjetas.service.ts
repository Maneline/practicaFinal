import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CuentasTarjetasService {

  info: any = [];

  constructor(private http: HttpClient) { 
    http.get("../../../../assets/data/cuentas.json")
    .subscribe(resp =>  {
      this.info = resp;
    });
    
  }

  
}
