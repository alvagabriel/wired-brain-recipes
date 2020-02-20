/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StackedOffsizedBarComponent } from './stacked-offsized-bar.component';

describe('StackedOffsizedBarComponent', () => {
  let component: StackedOffsizedBarComponent;
  let fixture: ComponentFixture<StackedOffsizedBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackedOffsizedBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedOffsizedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
