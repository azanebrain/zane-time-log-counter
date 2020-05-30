import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CalculateTimeViewComponent } from './calculate-time-view/calculate-time-view.component'


const routes: Routes = [
  {
    path: 'calculate',
    component: CalculateTimeViewComponent,
  },
  {
    path: '',
    redirectTo: '/calculate',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/calculate'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
