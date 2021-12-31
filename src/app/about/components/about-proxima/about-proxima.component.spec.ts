import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutProximaComponent } from './about-proxima.component';

describe('AboutProximaComponent', () => {
  let component: AboutProximaComponent;
  let fixture: ComponentFixture<AboutProximaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutProximaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutProximaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
