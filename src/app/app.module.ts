import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// syncfusion angular charts
import { ChartModule } from '@syncfusion/ej2-angular-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StackedOffsizedBarComponent } from 'src/pages/charts/stacked-offsized-bar/stacked-offsized-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StackedOffsizedBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
