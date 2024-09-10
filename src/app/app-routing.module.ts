import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMediaComponent } from './calcular-media/calcular-media.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { ConversorTempComponent } from './conversor-temp/conversor-temp.component';
import { CalculadoraImcComponent } from './calculadora-imc/calculadora-imc.component';

const routes: Routes = [
  { path: 'calcular-media', component: CalcularMediaComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'apolice', component: ApoliceSeguroComponent },
  { path: 'conversor-temperatura', component: ConversorTempComponent },
  { path: 'calculadora-imc', component: CalculadoraImcComponent },
  { path: '', redirectTo: '/calcular-media', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
