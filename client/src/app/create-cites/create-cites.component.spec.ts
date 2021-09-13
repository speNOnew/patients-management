import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCitesComponent } from './create-cites.component';

describe('CreateCitesComponent', () => {
  let component: CreateCitesComponent;
  let fixture: ComponentFixture<CreateCitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
