import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Cadastro } from '../models/Cadastro';
import { Observable } from 'rxjs';
import { Consulta } from '../models/Consulta';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  protected url: string = "https://localhost:44385/api/";
  protected valorFormatado: string = "";

  constructor(private http: HttpClient) { }  

  Salvar(item: Cadastro):Observable<Cadastro>{
    
     return this.http.post<Cadastro>(this.url + 'salvar', item, this.ObterHeaderJson());                     
  }

  Consultar():Observable<Consulta[]>{
    
    return this.http.get<Consulta[]>(this.url + "consultar");
  }

  protected ObterHeaderJson(){
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
  }
}
