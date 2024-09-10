import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temp',
  templateUrl: './conversor-temp.component.html',
  styleUrls: ['./conversor-temp.component.css']
})
export class ConversorTempComponent {
  celsius: number | undefined;
  fahrenheit: number | undefined;
  kelvin: number | undefined;

  converter() {
    if (this.celsius !== undefined) {
      this.fahrenheit = (this.celsius * 9 / 5) + 32;
      this.kelvin = this.celsius + 273.15;
    }
  }
}
