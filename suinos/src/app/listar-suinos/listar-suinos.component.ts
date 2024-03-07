import { Component } from '@angular/core';
import { Suinos } from '../suino.model';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-listar-suinos',
  templateUrl: './listar-suinos.component.html',
  styleUrl: './listar-suinos.component.css'
})
export class ListarSuinosComponent {
  loadedSuino:Suinos[] = [];
  
  constructor(private bancoService:DataBaseService) { }

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

  editarBilhete(id:any){
    console.log(id);

  }

  apagarTudo(){
    this.bancoService.apagarTodosCadastros().subscribe( () => {
      console.log('Apagou tudo');
      this.loadedSuino = [];
    });
  }

}
