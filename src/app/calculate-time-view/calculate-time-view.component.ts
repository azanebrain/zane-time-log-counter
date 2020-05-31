import { Component, OnInit } from '@angular/core'
import { CalculateService } from '../calculate/calculate.service'
import { Log, Task } from '../log/log.model'

/**
 * This view accepts user input and triggers calculation logic
 */
@Component({
  selector: 'app-calculate-time-view',
  templateUrl: './calculate-time-view.component.html',
  styleUrls: ['./calculate-time-view.component.sass'],
})
export class CalculateTimeViewComponent implements OnInit {
  public result: Task

  constructor(private calculateService: CalculateService) {}

  ngOnInit(): void {}

  /**
   * Calculates the user input
   *
   * @param timeLog The user input. A string, but should be in Log[] format
   */
  public onCalculateTime(timeLog: string | Log[]) {
    this.result = this.calculateService.countAllTimeOfAllTasks(
      timeLog as string
    )
  }
}
