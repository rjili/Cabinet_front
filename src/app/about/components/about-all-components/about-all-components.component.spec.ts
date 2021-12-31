import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAllComponentsComponent } from './about-all-components.component';

describe('AboutAllComponentsComponent', () => {
  let component: AboutAllComponentsComponent;
  let fixture: ComponentFixture<AboutAllComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAllComponentsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAllComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
