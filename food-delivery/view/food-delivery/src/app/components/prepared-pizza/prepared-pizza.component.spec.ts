import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparedPizzaComponent } from './prepared-pizza.component';

describe('PreparedPizzaComponent', () => {
  let component: PreparedPizzaComponent;
  let fixture: ComponentFixture<PreparedPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparedPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparedPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
