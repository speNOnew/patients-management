import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificCitesComponent } from './modific-cites.component';

describe('ModificCitesComponent', () => {
  let component: ModificCitesComponent;
  let fixture: ComponentFixture<ModificCitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificCitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificCitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
