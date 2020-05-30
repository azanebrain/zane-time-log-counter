import { Component, OnInit } from '@angular/core'
import { CalculateService } from '../calculate/calculate.service'
import { Log } from '../log/log.model'

/**
 * This view accepts user input and triggers calculation logic
 */
@Component({
  selector: 'app-calculate-time-view',
  templateUrl: './calculate-time-view.component.html',
  styleUrls: ['./calculate-time-view.component.sass']
})
export class CalculateTimeViewComponent implements OnInit {

  constructor(private calculateService: CalculateService) { }

  ngOnInit(): void {
  }

  public onCalculateTime(timeLog: Log[]) {
    this.calculateService.countAllTimeOfAllTasks(timeLog)
  }

}
