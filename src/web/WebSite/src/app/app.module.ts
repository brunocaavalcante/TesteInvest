import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { rootRouterConfig } from './app.router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { TopoComponent } from './navegacao/topo/topo.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ServicoService } from './service/servico.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ConsultaComponent,
    TopoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [
    ServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
