import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtratoComponent } from './areas/extrato/extrato.component';
import { HomeComponent } from './areas/home/home.component';
import { PagamentoComponent } from './areas/pagamento/pagamento.component';


const routes: Routes = [
  {
    path: 'extrato', component: ExtratoComponent 
  },
  {
    path: 'pagamento', component: PagamentoComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
