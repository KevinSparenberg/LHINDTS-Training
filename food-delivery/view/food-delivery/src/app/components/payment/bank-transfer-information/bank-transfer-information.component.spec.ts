import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTransferInformationComponent } from './bank-transfer-information.component';

describe('BankTransferInformationComponent', () => {
  let component: BankTransferInformationComponent;
  let fixture: ComponentFixture<BankTransferInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTransferInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTransferInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
