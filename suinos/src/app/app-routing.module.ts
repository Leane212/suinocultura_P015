import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarServicoComponent } from './criar-servico/criar-servico.component';

const routes: Routes = [{path: "criar-servico", component: CriarServicoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
