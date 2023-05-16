import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeDropdownComponent } from './challenge-dropdown.component';

describe('ChallengeDropdownComponent', () => {
  let component: ChallengeDropdownComponent;
  let fixture: ComponentFixture<ChallengeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
