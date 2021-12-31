import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDemoComponent } from './about-demo.component';

describe('AboutDemoComponent', () => {
  let component: AboutDemoComponent;
  let fixture: ComponentFixture<AboutDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutDemoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
