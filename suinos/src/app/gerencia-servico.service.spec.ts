import { TestBed } from '@angular/core/testing';

import { GerenciaServicoService } from './gerencia-servico.service';

describe('GerenciaServicoService', () => {
  let service: GerenciaServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciaServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
