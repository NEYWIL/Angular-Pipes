import { Component } from '@angular/core';

@Component({
  selector: 'app-comunes',
  templateUrl: './comunes.component.html',
  styles: [],
})
export class ComunesComponent {
  nombreLower: string = 'wilmer';
  nombreUpper: string = 'WILMER';
  nombreCompleto: string = 'wiLmEr uRIbe';

  fecha: Date = new Date();
}
