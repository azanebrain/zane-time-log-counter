import { Injectable } from '@angular/core'

/**
 * Executes business logic for calculating time logged
 */
@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor() {}

  /**
   * Given a list of logs, provides an overview of how much total time has been spent on each top-level task
   * @param logs A list of logs being counted
   */
  public countAllTimeOfAllTasks(logs: any[]) {
    console.log(`logs: `, logs)
  }
}
