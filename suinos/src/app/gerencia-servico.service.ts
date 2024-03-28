import { Injectable } from '@angular/core';
import { Suinos } from './suino.model';

@Injectable({
  providedIn: 'root'
})
export class GerenciaServicoService {
  private suinosSelecionados: Suinos[] = [];
  constructor() { }

  setSuinosSelecionados(suinos: Suinos[]) {
    this.suinosSelecionados = suinos;
    console.log("funciona", this.suinosSelecionados);
  }

  getSuinosSelecionados(){
    return this.suinosSelecionados;
  }
}
