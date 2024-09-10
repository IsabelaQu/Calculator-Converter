import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  num1: number | undefined;
  num2: number | undefined;
  operation: string = '+';
  result: number | undefined;

  calcular() {
    if (this.num1 !== undefined && this.num2 !== undefined) {
      switch (this.operation) {
        case '+':
          this.result = this.num1 + this.num2;
          break;
        case '-':
          this.result = this.num1 - this.num2;
          break;
        case '*':
          this.result = this.num1 * this.num2;
          break;
        case '/':
          this.result = this.num2 !== 0 ? this.num1 / this.num2 : undefined;
          break;
      }
    }
  }
}
