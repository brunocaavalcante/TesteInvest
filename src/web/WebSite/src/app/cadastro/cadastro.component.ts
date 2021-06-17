import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cadastro } from '../models/Cadastro';
import { ServicoService } from '../service/servico.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent {

  public valorFormatado : string = "";
  public parcelas : number = 0;
  public valor : number = 0;
  public cadastro: Cadastro = new Cadastro;

  constructor(private service: ServicoService) { 

  }
  
  Salvar(f: NgForm) {
    
    if(f.valid){

      let item = Object.assign({}, new Cadastro, f.value);
      
      this.service.Salvar(item).subscribe(
        data => {
          this.cadastro = data;
        },
        error => console.log(error)
      );

    }  
  }
  
}
