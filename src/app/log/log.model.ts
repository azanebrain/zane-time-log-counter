export interface Log {
  // The Date when the logged time occurred
  date: string // YYYY-MM-DD format
  // A custom Task, or the time spent on that task
  // As "any", indicates that a custom value has been used, similar to date
  [key: string]: Task | number | any
}

export interface Task {
  [key: string]: Task | number
}
