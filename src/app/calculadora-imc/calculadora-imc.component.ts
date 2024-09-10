import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-imc',
  templateUrl: './calculadora-imc.component.html',
  styleUrls: ['./calculadora-imc.component.css']
})
export class CalculadoraImcComponent {
  peso: number | undefined;
  altura: number | undefined;
  imc: number | undefined;
  classificacao: string = '';

  onPesoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.peso = parseFloat(input.value);
  }

  onAlturaChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.altura = parseFloat(input.value);
  }

  calcularImc(): void {
    if (this.peso !== undefined && this.altura !== undefined && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
      this.classificacao = this.obterClassificacao(this.imc);
    }
  }

  obterClassificacao(imc: number): string {
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
    if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc < 34.9) return 'Obesidade grau I';
    if (imc >= 35 && imc < 39.9) return 'Obesidade grau II';
    return 'Obesidade grau III';
  }
}
