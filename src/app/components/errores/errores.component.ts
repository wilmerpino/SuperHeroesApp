import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errores',
  templateUrl: './errores.component.html',
  styleUrls: ['./errores.component.css']
})
export class ErroresComponent {
  @Input() activo: boolean = false;
  @Input() mensaje: string = ''

  constructor() { 

  }
}
