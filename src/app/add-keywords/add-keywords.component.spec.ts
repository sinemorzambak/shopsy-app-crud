import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeywordsComponent } from './add-keywords.component';

describe('AddKeywordsComponent', () => {
  let component: AddKeywordsComponent;
  let fixture: ComponentFixture<AddKeywordsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddKeywordsComponent]
    });
    fixture = TestBed.createComponent(AddKeywordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
