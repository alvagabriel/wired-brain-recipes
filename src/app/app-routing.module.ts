import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackedOffsizedBarComponent } from 'src/pages/charts/stacked-offsized-bar/stacked-offsized-bar.component';


const routes: Routes = [
  {
    path: 'stacked-offsized-bar-chart',
    component: StackedOffsizedBarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
