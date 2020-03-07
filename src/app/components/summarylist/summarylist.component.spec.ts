import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarylistComponent } from './summarylist.component';

describe('SummarylistComponent', () => {
  let component: SummarylistComponent;
  let fixture: ComponentFixture<SummarylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
