import { Routes } from "@angular/router";
import { CadastroComponent } from "./cadastro/cadastro.component";
import { ConsultaComponent } from "./consulta/consulta.component";
import { HomeComponent } from "./navegacao/home/home.component";

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    {path:'cadastro',component:CadastroComponent},
    {path:'consulta',component:ConsultaComponent}
]

