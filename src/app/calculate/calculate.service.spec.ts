import { TestBed } from '@angular/core/testing'

import { CalculateService } from './calculate.service'
import { MOCK_LOGS } from '../log/log.mock'

describe('CalculateService', () => {
  let service: CalculateService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CalculateService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('Count All Time Of All Tasks', () => {
    it(`should calculate all tasks`, () => {
      const expectedValue = {
        'awesome-side-project': 395,
        date: 0,
        organize: 62,
        'other-project': 42,
      }
      const mockAsString = JSON.stringify(MOCK_LOGS)
      expect(service.countAllTimeOfAllTasks(mockAsString)).toEqual(expectedValue)
    })
  })
})
