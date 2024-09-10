import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {
  nome: string = '';
  sexo: string = 'masculino';
  idade: number | undefined;
  valor: number | undefined;
  valorApolice: number | undefined;

  calcularApolice() {
    // Validação para garantir que idade e valor são não-negativos
    if (this.idade !== undefined && this.idade < 0) {
      alert('A idade não pode ser negativa.');
      return;
    }
    if (this.valor !== undefined && this.valor < 0) {
      alert('O valor do automóvel não pode ser negativo.');
      return;
    }

    // Cálculo do valor da apólice
    if (this.sexo === 'masculino' && this.idade !== undefined) {
      if (this.idade <= 25) {
        this.valorApolice = this.valor ? this.valor * 0.15 : undefined;
      } else {
        this.valorApolice = this.valor ? this.valor * 0.10 : undefined;
      }
    } else if (this.sexo === 'feminino' && this.valor !== undefined) {
      this.valorApolice = this.valor * 0.08;
    }
  }
}
