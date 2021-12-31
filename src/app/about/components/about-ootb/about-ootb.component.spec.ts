import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOotbComponent } from './about-ootb.component';

describe('AboutOotbComponent', () => {
  let component: AboutOotbComponent;
  let fixture: ComponentFixture<AboutOotbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutOotbComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOotbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
