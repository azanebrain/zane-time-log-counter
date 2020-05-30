import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CalculateTimeViewModule } from './calculate-time-view/calculate-time-view.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculateTimeViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
