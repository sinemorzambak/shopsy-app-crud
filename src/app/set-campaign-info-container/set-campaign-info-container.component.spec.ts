import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCampaignInfoContainerComponent } from './set-campaign-info-container.component';

describe('SetCampaignInfoContainerComponent', () => {
  let component: SetCampaignInfoContainerComponent;
  let fixture: ComponentFixture<SetCampaignInfoContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetCampaignInfoContainerComponent]
    });
    fixture = TestBed.createComponent(SetCampaignInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
