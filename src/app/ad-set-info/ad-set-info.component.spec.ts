import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSetInfoComponent } from './ad-set-info.component';

describe('AdSetInfoComponent', () => {
  let component: AdSetInfoComponent;
  let fixture: ComponentFixture<AdSetInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdSetInfoComponent]
    });
    fixture = TestBed.createComponent(AdSetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
