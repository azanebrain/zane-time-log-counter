import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CalculateTimeViewComponent } from './calculate-time-view.component'

describe('CalculateTimeViewComponent', () => {
  let component: CalculateTimeViewComponent
  let fixture: ComponentFixture<CalculateTimeViewComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateTimeViewComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateTimeViewComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
