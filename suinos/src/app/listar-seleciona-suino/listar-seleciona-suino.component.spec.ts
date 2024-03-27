import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSelecionaSuinoComponent } from './listar-seleciona-suino.component';

describe('ListarSelecionaSuinoComponent', () => {
  let component: ListarSelecionaSuinoComponent;
  let fixture: ComponentFixture<ListarSelecionaSuinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarSelecionaSuinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarSelecionaSuinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
