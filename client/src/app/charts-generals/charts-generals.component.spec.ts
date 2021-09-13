import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsGeneralsComponent } from './charts-generals.component';

describe('ChartsGeneralsComponent', () => {
  let component: ChartsGeneralsComponent;
  let fixture: ComponentFixture<ChartsGeneralsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsGeneralsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsGeneralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
