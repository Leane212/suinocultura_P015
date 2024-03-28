import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { GerenciaServicoService } from '../gerencia-servico.service';
import { Suinos } from '../suino.model';
@Component({
  selector: 'app-criar-servico',
  templateUrl: './criar-servico.component.html',
  styleUrl: './criar-servico.component.css'
})
export class CriarServicoComponent implements OnInit{
  servicos = [
    { value: 'Vacina contra Parvovirose, leptospirose e erisipela', checked: false },
    { value: 'Vacina contra Rinite atrófica', checked: false },
    { value: 'Vacina contra Circovirose', checked: false },
    { value: 'Vacina contra Micoplasma', checked: false },
    { value: 'Limpeza de Chiqueiro', checked: false },
    { value: 'Limpeza da Sala de Creche', checked: false },
    { value: 'Banho', checked: false },
  ];
  
  formServico!: FormGroup;
  formularioInvalido: boolean | undefined;

  ngOnInit(): void {
    this.formServico = new FormGroup({
      'dataServico': new FormControl(null, [Validators.required]),
      'obs': new FormControl("", []),
      'servicos': new FormControl(null,[])
    })
  }

  constructor(private formConstrutor: FormBuilder, private gerenciaServico: GerenciaServicoService){ }
  
  changeChecked(servico: any){
    servico.checked = !servico.checked;
  }

  onSubmit() {
    if (this.formServico.valid) {
      const dataServico = this.formServico.get('dataServico')!.value;
      const servicosSelecionados = this.servicos.filter(servico => servico.checked).map(servico => servico.value);
      const suinosSelecionados = this.gerenciaServico.getSuinosSelecionados();
      const obs = this.formServico.get('obs')!.value;
      const objetoServico = {
        dataServico: dataServico,
        servicos: servicosSelecionados,
        observacoes: obs,
        suinos: suinosSelecionados
      };
      console.log(objetoServico);
    } else {
      this.formularioInvalido = true;
    }
  }
}
