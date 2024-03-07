import { Component } from '@angular/core';
import { AutenticaService } from './autentica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'suinos';

  estaAutenticado = false;

  constructor(private authService: AutenticaService) {}

  ngOnInit() {
    this.authService.estaAutenticado$.subscribe(estaAutenticado => {
      this.estaAutenticado = estaAutenticado;
    });
  }
}
