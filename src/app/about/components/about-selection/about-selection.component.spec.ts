import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSelectionComponent } from './about-selection.component';

describe('AboutSelectionComponent', () => {
  let component: AboutSelectionComponent;
  let fixture: ComponentFixture<AboutSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSelectionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
