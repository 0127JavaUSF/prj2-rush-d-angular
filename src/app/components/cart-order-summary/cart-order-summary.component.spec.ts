import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderSummaryComponent } from './cart-order-summary.component';

describe('CartOrderSummaryComponent', () => {
  let component: CartOrderSummaryComponent;
  let fixture: ComponentFixture<CartOrderSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrderSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
