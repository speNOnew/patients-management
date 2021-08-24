import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmergencyComponent } from './create-emergency.component';

describe('CreateEmergencyComponent', () => {
  let component: CreateEmergencyComponent;
  let fixture: ComponentFixture<CreateEmergencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEmergencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
