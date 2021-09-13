import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniHisComponent } from './ini-his.component';

describe('IniHisComponent', () => {
  let component: IniHisComponent;
  let fixture: ComponentFixture<IniHisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniHisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
