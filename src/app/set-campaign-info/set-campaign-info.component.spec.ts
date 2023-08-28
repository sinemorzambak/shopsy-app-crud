import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCampaignInfoComponent } from './set-campaign-info.component';

describe('SetCampaignInfoComponent', () => {
  let component: SetCampaignInfoComponent;
  let fixture: ComponentFixture<SetCampaignInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetCampaignInfoComponent]
    });
    fixture = TestBed.createComponent(SetCampaignInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
