import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPurchaseComponent } from './about-purchase.component';

describe('AboutPurchaseComponent', () => {
  let component: AboutPurchaseComponent;
  let fixture: ComponentFixture<AboutPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPurchaseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
