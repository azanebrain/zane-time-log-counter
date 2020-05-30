import { Injectable } from '@angular/core'
import { Log, Task } from '../log/log.model'

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
   *
   * @param logs A list of logs being counted
   */
  public countAllTimeOfAllTasks(logs: string): Task {
    const logsAsJson: Log[] = JSON.parse(logs as string)

    // An output to track each item being aggregated
    const output = {}
    logsAsJson.forEach((log) => {
      for (const key in log) {
        if (log.hasOwnProperty(key)) {
          // Determine the total time spent on this task
          const totalTimeOfKey = this.countTimeOfSpecificTaskAcrossLogs(
            log,
            key
          )
          // If the task is already in the output object, append the new value. Otherwise, create a new item in the output
          if (output.hasOwnProperty(key)) {
            output[key] += totalTimeOfKey
          } else {
            output[key] = totalTimeOfKey
          }
        }
      }
    })
    return output
  }


  /**
   * Counts the accumulated time of a single log
   *
   * If the task's value is another sub-task, it will recursively go through each sub-task until it finds a numeric value
   * @param log The log being evaluated
   */
  private countAllTimeInLog(log: Log): number {
    let output = 0
    for (const key in log) {
      if (typeof log[key] === 'number') {
        output += log[key]
      } else {
        output += this.countAllTimeInLog(log[key])
      }
    }
    return output
  }

  /**
   * Counts how much time has accumulated for a specific Task in a Log
   *
   * @param log The log being evaluated
   * @param taskToEvaluate A task key being evaluated
   */
  private countTimeOfSpecificTaskAcrossLogs(log: Log, taskToEvaluate: string): number {
    if (log.hasOwnProperty(taskToEvaluate)) {
      // Make sure to ONLY evaluate numbers and tasks
      if (this.isTask(log[taskToEvaluate])) {
        return this.countAllTimeInLog(log[taskToEvaluate])
      }
    }
    return 0
  }

  /**
   * Determines if an item is a Task or a Log
   *
   * @param item The item being evaluated
   */
  private isTask(item: Task | Log): boolean {
    if (typeof item === 'number' || typeof item === 'object') {
      return true
    }
    return false
  }
}
