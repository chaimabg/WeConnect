import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CowSpaceDetailsComponent } from './cow-space-details.component';

describe('CowSpaceDetailsComponent', () => {
  let component: CowSpaceDetailsComponent;
  let fixture: ComponentFixture<CowSpaceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CowSpaceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CowSpaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
