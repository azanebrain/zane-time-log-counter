import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CalculateTimeViewComponent } from './calculate-time-view.component'

@NgModule({
  declarations: [
    CalculateTimeViewComponent,
  ],
  exports: [
    CalculateTimeViewComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class CalculateTimeViewModule {}
