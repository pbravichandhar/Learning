import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyRiskScoreComponent } from './property-risk-score/property-risk-score.component'

const routes: Routes = [
  { 
    path: '',
    component: PropertyRiskScoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
