import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInfoComponent } from './MobileInfo.component';

describe('InformationComponent', () => {
  let component: MobileInfoComponent;
  let fixture: ComponentFixture<MobileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
