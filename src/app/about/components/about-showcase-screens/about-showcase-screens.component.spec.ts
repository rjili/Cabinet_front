import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShowcaseScreensComponent } from './about-showcase-screens.component';

describe('AboutShowcaseScreensComponent', () => {
  let component: AboutShowcaseScreensComponent;
  let fixture: ComponentFixture<AboutShowcaseScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutShowcaseScreensComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutShowcaseScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
