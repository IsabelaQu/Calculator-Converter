import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrls: ['./calcular-media.component.css']
})
export class CalcularMediaComponent {
  ac1: number | null = null;
  ac2: number | null = null;
  ag: number | null = null;
  af: number | null = null;
  result: string | null = null;

  calculateAverage(): void {
    if (this.ac1 !== null && this.ac2 !== null && this.ag !== null && this.af !== null) {
      const mediaFinal = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
      this.result = mediaFinal >= 5 ? 'Aprovado' : 'Reprovado';
    } else {
      this.result = 'Preencha todos os campos.';
    }
  }
}
