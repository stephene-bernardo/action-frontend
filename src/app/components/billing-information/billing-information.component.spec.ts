import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInformationComponent } from './billing-information.component';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BillingInformationComponent', () => {
  let component: BillingInformationComponent;
  let fixture: ComponentFixture<BillingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingInformationComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
