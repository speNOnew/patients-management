import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGobackComponent } from './btn-goback.component';

describe('BtnGobackComponent', () => {
  let component: BtnGobackComponent;
  let fixture: ComponentFixture<BtnGobackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnGobackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnGobackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
