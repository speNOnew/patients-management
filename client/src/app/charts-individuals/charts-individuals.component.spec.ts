import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsIndividualsComponent } from './charts-individuals.component';

describe('ChartsIndividualsComponent', () => {
  let component: ChartsIndividualsComponent;
  let fixture: ComponentFixture<ChartsIndividualsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsIndividualsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsIndividualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
