import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroSuinosComponent } from './cadastro-suinos/cadastro-suinos.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarSuinosComponent } from './listar-suinos/listar-suinos.component';
import { EditarComponent } from './editar/editar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-suinos', component: CadastroSuinosComponent },
  { path: 'listar-suinos', component: ListarSuinosComponent },
  { path: 'editarCadastro/:id', component: EditarComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroSuinosComponent,
    HomeComponent,
    ListarSuinosComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
