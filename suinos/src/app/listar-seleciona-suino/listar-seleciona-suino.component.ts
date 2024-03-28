import { Component } from '@angular/core';
import { Suinos } from '../suino.model';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { DataBaseService } from '../data-base.service';
import { GerenciaServicoService } from '../gerencia-servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-seleciona-suino',
  templateUrl: './listar-seleciona-suino.component.html',
  styleUrl: './listar-seleciona-suino.component.css'
})
export class ListarSelecionaSuinoComponent {
event: any;
selectAll(arg0: any) {
throw new Error('Method not implemented.');
}
  displayedColumns: string[] = ['brincoAnimal', 'brincoPai', 'brincoMae', 'dataNascimento', 'dataSaida', 'status', 'sexo', 'idade', ];
  loadedSuino:Suinos[] = [];
  suinosSelecionados: Suinos[] = [];
  filtroBrincoPai: string | null = null;
  filtroBrincoMae: string | null = null;
  filtroDataNascimento: string | null = null;
  filtroDataSaida: string | null = null;
  filtroSexo: string | null = null;
  filtroStatus: string | null = null;
  
  constructor(private bancoService:DataBaseService, private gerenciaServico: GerenciaServicoService,private router: Router) { }

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal() {
    this.bancoService.getSuinos().subscribe(responseData => {
      console.log(responseData);
      this.loadedSuino = responseData;
      console.log(this.loadedSuino);
    });
  }

  aplicarFiltro() {
    
  let suinosFiltrados = this.loadedSuino.slice();

  if (this.filtroBrincoPai) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.brincoPai === this.filtroBrincoPai);
  }
  if (this.filtroBrincoMae) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.brincoMae === this.filtroBrincoMae);
  }

  if (this.filtroDataNascimento) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.dataNascimento === this.filtroDataNascimento);
  }
  if (this.filtroDataSaida) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.dataSaida === this.filtroDataSaida);
  }
  if (this.filtroSexo) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.sexo === this.filtroSexo);
  }
  if (this.filtroStatus) {
    suinosFiltrados = suinosFiltrados.filter(suino => suino.status === this.filtroStatus);
  }

  this.loadedSuino = suinosFiltrados;
  };

  limparFiltro(){
    this.filtroBrincoPai = null;
    this.filtroBrincoMae = null;
    this.filtroSexo = null;
    this.filtroDataNascimento = null;
    this.filtroDataSaida = null;
    this.getAnimal();
  }

  selectAll1(event: MatCheckboxChange) {
    if (event.checked) {
      this.suinosSelecionados = [...this.loadedSuino];
    } else {
      this.suinosSelecionados = [];
    }
  }
  
  toggleSelection(suino: Suinos, event: MatCheckboxChange) {
    if (event.checked) {
      this.suinosSelecionados.push(suino);
    } else {
      const index = this.suinosSelecionados.findIndex(s => s.id === suino.id);
      if (index !== -1) {
        this.suinosSelecionados.splice(index, 1);
      }
    }
  }

  enviaSuinos(){
    this.gerenciaServico.setSuinosSelecionados(this.suinosSelecionados);
    this.router.navigate(['criar-servico']);
  }
}
