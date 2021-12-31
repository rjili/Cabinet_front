import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBeautifulInterfaceComponent } from './about-beautiful-interface.component';

describe('AboutBeautifulInterfaceComponent', () => {
  let component: AboutBeautifulInterfaceComponent;
  let fixture: ComponentFixture<AboutBeautifulInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutBeautifulInterfaceComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBeautifulInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
