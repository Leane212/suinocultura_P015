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
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AutenticaInterceptor } from './autentica.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cadastro-suinos', component: CadastroSuinosComponent },
  { path: 'listar', component: ListarSuinosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'autenticacao', component : AutenticacaoComponent},
  { path: '', redirectTo: '/autenticacao', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroSuinosComponent,
    HomeComponent,
    ListarSuinosComponent,
    AutenticacaoComponent,
    LoadingSpinnerComponent
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
    provideAnimationsAsync(),
    {provide: HTTP_INTERCEPTORS, useClass: AutenticaInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }