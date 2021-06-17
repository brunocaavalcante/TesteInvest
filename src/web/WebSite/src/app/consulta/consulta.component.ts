import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/Consulta';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  constructor(private service: ServicoService) { 
   
  }

  public lista : Consulta[] = [];

  ngOnInit(): void {

    this.service.Consultar().subscribe(
      data => {
        this.lista = data;
        console.log(data);
      },
      error => console.log(error)
    );
  }

}
