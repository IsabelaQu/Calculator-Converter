import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { ConversorTempComponent } from './conversor-temp/conversor-temp.component';
import { CalculadoraImcComponent } from './calculadora-imc/calculadora-imc.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcularMediaComponent,
    CalculadoraComponent,
    ApoliceSeguroComponent,
    ConversorTempComponent,
    CalculadoraImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
